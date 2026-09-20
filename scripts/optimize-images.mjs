/**
 * Converts every PNG under src/assets to WebP (next to the source file), then moves the
 * original PNG to _originals/ (same folder structure, outside src, git-ignored).
 *
 *   pnpm optimize:images              convert + archive originals
 *   pnpm optimize:images --keep       convert only, leave the PNGs where they are
 *   pnpm optimize:images --dry-run    show what would happen
 *
 * Quality 82, alpha kept, dimensions untouched, metadata stripped. Each WebP is verified
 * (same size, alpha preserved, PSNR) BEFORE its original is moved — a failed check leaves
 * the PNG in place and exits non-zero.
 */
import { mkdir, readdir, rename, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const QUALITY = 82
const MIN_PSNR_DB = 38 // below this the conversion is visibly lossy

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const assetsDir = path.join(root, 'src', 'assets')
const originalsDir = path.join(root, '_originals')
const args = new Set(process.argv.slice(2))
const keep = args.has('--keep')
const dryRun = args.has('--dry-run')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

/** PSNR over RGBA, weighting colour by alpha so hidden RGB under transparent pixels doesn't count. */
async function psnr(pngPath, webpPath) {
  const [a, b] = await Promise.all(
    [pngPath, webpPath].map((p) => sharp(p).ensureAlpha().raw().toBuffer({ resolveWithObject: true })),
  )
  let sum = 0
  let weight = 0
  for (let i = 0; i < a.data.length; i += 4) {
    const w = (a.data[i + 3] + b.data[i + 3]) / 510
    for (let c = 0; c < 3; c++) sum += w * (a.data[i + c] - b.data[i + c]) ** 2
    sum += (a.data[i + 3] - b.data[i + 3]) ** 2 // alpha error counts at full weight
    weight += w * 3 + 1
  }
  const mse = sum / Math.max(weight, 1)
  return mse === 0 ? Infinity : 10 * Math.log10(255 ** 2 / mse)
}

const kb = (n) => `${(n / 1024).toFixed(1)} KB`
const rows = []
let failed = false

for await (const file of walk(assetsDir)) {
  if (!/\.png$/i.test(file)) continue

  const rel = path.relative(assetsDir, file)
  const out = file.replace(/\.png$/i, '.webp')
  const before = (await stat(file)).size

  if (dryRun) {
    console.log(`would convert ${rel} (${kb(before)})`)
    continue
  }

  const meta = await sharp(file).metadata()
  await sharp(file).webp({ quality: QUALITY, alphaQuality: 100, effort: 6, smartSubsample: true }).toFile(out)

  const outMeta = await sharp(out).metadata()
  const score = await psnr(file, out)
  const checks = {
    dimensions: outMeta.width === meta.width && outMeta.height === meta.height,
    alpha: Boolean(outMeta.hasAlpha) === Boolean(meta.hasAlpha),
    fidelity: score >= MIN_PSNR_DB,
  }

  if (Object.values(checks).every(Boolean)) {
    if (!keep) {
      const dest = path.join(originalsDir, rel)
      await mkdir(path.dirname(dest), { recursive: true })
      await rename(file, dest)
    }
  } else {
    failed = true
    await rm(out, { force: true })
    console.error(`✗ ${rel}: verification failed`, checks, `PSNR ${score.toFixed(1)} dB — PNG left in place`)
    continue
  }

  const after = (await stat(out)).size
  rows.push({
    file: rel.replaceAll('\\', '/'),
    size: `${meta.width}×${meta.height}`,
    alpha: meta.hasAlpha ? 'yes' : 'no',
    before: kb(before),
    after: kb(after),
    saved: `${(100 - (after / before) * 100).toFixed(1)}%`,
    psnr: `${score.toFixed(1)} dB`,
  })
}

if (rows.length) console.table(rows)
else if (!failed && !dryRun) console.log('No PNGs under src/assets — nothing to do.')
if (!dryRun && rows.length && !keep) console.log(`Originals moved to ${path.relative(root, originalsDir)}${path.sep}`)
process.exit(failed ? 1 : 0)

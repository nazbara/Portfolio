/**
 * Strips dead padding from src/assets/clients/client-*.webp so a logo drawn small inside a big
 * canvas doesn't render small in ClientStrip.tsx's cards (object-contain scales the whole file,
 * padding included). Each file keeps its own natural aspect ratio — object-contain already scales
 * every logo fairly within the same card box, so there's no need to force them onto a shared
 * canvas size (an earlier version of this script did that, and it over-shrank logos that were
 * already tightly cropped, like Bluekode and Byters — don't reintroduce that).
 *
 * For each file:
 *   1. `.trim({ threshold })` strips the near-white/near-transparent margin down to the logo's
 *      tight bounding box.
 *   2. `.extend()` adds a small uniform margin back (PAD_RATIO of the trimmed width/height, on
 *      every side, transparent) so the logo isn't flush against the card edge.
 *
 * Quality 82, matching optimize-images.mjs. Overwrites the .webp in place.
 *
 * Run against specific files only — this folder holds a mix of logos in different states, and
 * blindly reprocessing all of them is what caused the regression this script now fixes:
 *
 *   node scripts/crop-client-logos.mjs client-03 client-07
 *
 * With no arguments it falls back to every client-*.webp, for a brand-new batch of logos that
 * have never been processed — don't reach for that on this folder without checking each result.
 *
 * If a file's padding isn't a clean flat edge, add a per-file override (threshold, and/or an
 * explicit `background` colour sharp should trim against) rather than changing the defaults for
 * everyone else.
 */
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

// Windows: libvips otherwise keeps input files open, which breaks a same-path overwrite (EBUSY).
sharp.cache(false)

const QUALITY = 82
const TRIM_THRESHOLD = 10
const PAD_RATIO = 0.06 // of the trimmed width/height, added back on every side

/** Per-file overrides for logos whose background isn't a clean flat edge. */
const OVERRIDES = {
  'client-03': { threshold: 30 },
  'client-07': { threshold: 30 },
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const clientsDir = path.join(root, 'src', 'assets', 'clients')

const args = process.argv.slice(2)
const files = args.length
  ? args.map((a) => (a.endsWith('.webp') ? a : `${a}.webp`))
  : (await readdir(clientsDir)).filter((f) => /^client-\d+\.webp$/i.test(f)).sort()

const rows = []

for (const file of files) {
  const key = path.parse(file).name
  const { threshold = TRIM_THRESHOLD, background } = OVERRIDES[key] ?? {}
  const full = path.join(clientsDir, file)

  const before = await sharp(full).metadata()

  const trimmedBuffer = await sharp(full)
    .trim(background ? { threshold, background } : { threshold })
    .toBuffer()
  const trimmedMeta = await sharp(trimmedBuffer).metadata()

  const padX = Math.round(trimmedMeta.width * PAD_RATIO)
  const padY = Math.round(trimmedMeta.height * PAD_RATIO)

  const outBuffer = await sharp(trimmedBuffer)
    .extend({ top: padY, bottom: padY, left: padX, right: padX, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: QUALITY })
    .toBuffer()

  await writeFile(full, outBuffer)

  rows.push({
    file,
    before: `${before.width}×${before.height}`,
    trimmed: `${trimmedMeta.width}×${trimmedMeta.height}`,
    padded: `${trimmedMeta.width + 2 * padX}×${trimmedMeta.height + 2 * padY}`,
  })
}

console.table(rows)
console.log(`Trimmed and re-padded ${rows.length} logo(s) in ${path.relative(root, clientsDir)}${path.sep}`)

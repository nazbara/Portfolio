/**
 * Generates public/sitemap.xml from the static routes below plus the dynamic slugs that
 * data/work.ts, data/insights.ts and data/service-pages/**\/*.ts define. Data files are TS, so
 * their slugs are pulled out with a regex rather than imported — this stays a plain Node script
 * with no build step, and can run as `prebuild` before tsc/vite exist.
 *
 *   pnpm sitemap    generate public/sitemap.xml on its own
 *   pnpm build      runs this first via the "prebuild" script
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE_URL = 'https://nezbara.com'

const STATIC_ROUTES = ['/', '/about', '/work', '/insights', '/contact', '/privacy']

const SLUG_RE = /slug:\s*['"]([^'"]+)['"]/g

async function extractSlugs(filePath) {
  const source = await readFile(filePath, 'utf8')
  return [...source.matchAll(SLUG_RE)].map((match) => match[1])
}

async function collectTsFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await collectTsFiles(entryPath)))
    else if (entry.name.endsWith('.ts') && !['types.ts', 'common.ts', 'index.ts'].includes(entry.name))
      files.push(entryPath)
  }
  return files
}

async function getWorkSlugs() {
  return extractSlugs(path.join(root, 'src/data/work.ts'))
}

async function getInsightSlugs() {
  return extractSlugs(path.join(root, 'src/data/insights.ts'))
}

async function getServiceSlugs() {
  const files = await collectTsFiles(path.join(root, 'src/data/service-pages'))
  const slugs = await Promise.all(files.map(extractSlugs))
  return slugs.flat()
}

function urlEntry(loc, changefreq) {
  return `  <url>\n    <loc>${BASE_URL}${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n  </url>`
}

async function main() {
  const [workSlugs, insightSlugs, serviceSlugs] = await Promise.all([
    getWorkSlugs(),
    getInsightSlugs(),
    getServiceSlugs(),
  ])

  const dynamicRoutes = [
    ...workSlugs.map((slug) => `/work/${slug}`),
    ...insightSlugs.map((slug) => `/insights/${slug}`),
    ...serviceSlugs.map((slug) => `/services/${slug}`),
  ]

  const urls = [...STATIC_ROUTES, ...dynamicRoutes]

  const body = urls.map((loc) => urlEntry(loc, loc === '/' ? 'weekly' : 'monthly')).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

  const outPath = path.join(root, 'public/sitemap.xml')
  await writeFile(outPath, xml, 'utf8')
  console.log(`sitemap: wrote ${urls.length} URLs to public/sitemap.xml`)
}

main()

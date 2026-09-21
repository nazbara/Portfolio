/**
 * Image lookup for content that lives in data files. Drop `<slug>.webp` into
 * src/assets/work, src/assets/insights, src/assets/founders or src/assets/team (or `<name>.webp` into src/assets/about;
 * PNG / JPG work too: run `pnpm optimize:images`) and the matching card / section picks it up —
 * no code changes. A slug with no file returns undefined, and the caller falls back to
 * <PlaceholderArt /> (or, for the About page's "embedded" background, to a dark gradient).
 *
 * The globs are eager, so a file that exists is imported (and therefore emitted into dist with a
 * hashed name) whether or not a data entry uses it yet — the prune plugin in vite.config.ts only
 * drops images that nothing references, and these imports reference every file they match.
 */

function bySlug(modules: Record<string, string>): Map<string, string> {
  return new Map(
    Object.entries(modules).map(([path, url]) => [path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''), url]),
  )
}

const workImages = bySlug(
  import.meta.glob<string>('../assets/work/*.webp', { eager: true, import: 'default' }),
)
const insightImages = bySlug(
  import.meta.glob<string>('../assets/insights/*.webp', { eager: true, import: 'default' }),
)

export const getWorkImage = (slug: string): string | undefined => workImages.get(slug)
export const getInsightImage = (slug: string): string | undefined => insightImages.get(slug)

const teamImages = bySlug(
  import.meta.glob<string>(['../assets/founders/*.webp', '../assets/team/*.webp'], { eager: true, import: 'default' }),
)
const aboutImages = bySlug(
  import.meta.glob<string>('../assets/about/*.webp', { eager: true, import: 'default' }),
)

/** src/assets/founders/<slug>.webp (or src/assets/team/<slug>.webp) — founder / team portraits, shown at 4:5. */
export const getTeamImage = (slug: string): string | undefined => teamImages.get(slug)
/** src/assets/about/<name>.webp — About page pictures, e.g. "last-img" (the Long-term partners background). */
export const getAboutImage = (name: string): string | undefined => aboutImages.get(name)

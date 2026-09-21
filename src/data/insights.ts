/**
 * PLACEHOLDER CONTENT — sample articles so the Insights carousel has something to show (6 posts: 3 per view on desktop ⇒ 4 dots).
 * Replace with real posts when they exist. To give an entry an image, drop a file named
 * `<slug>.webp` into src/assets/insights (see src/lib/media.ts); until then it shows generated art.
 */
export interface InsightPost {
  slug: string
  category: string
  minutes: number
  title: string
  excerpt: string
  /** ISO date (yyyy-mm-dd). */
  date: string
}

export const insightsHeading = 'Notes from the studio'

export const insightsIntro =
  'Placeholder intro — short, muted copy about what the studio writes: lessons from projects, process and craft.'

export const insightsCta = { label: 'Read all insights', to: '/insights' } as const

export const insightPosts: InsightPost[] = [
  {
    slug: 'sample-article-01',
    category: 'Brand',
    minutes: 4,
    title: 'Sample article title that runs to a couple of lines',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-01-12',
  },
  {
    slug: 'sample-article-02',
    category: 'Design',
    minutes: 5,
    title: 'Another sample article title, a little longer than the first one',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-01-28',
  },
  {
    slug: 'sample-article-03',
    category: 'Strategy',
    minutes: 3,
    title: 'A third sample article title for the grid',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-02-09',
  },
  {
    slug: 'sample-article-04',
    category: 'Process',
    minutes: 6,
    title: 'A fourth sample article, only shown in the carousel',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-02-24',
  },
  {
    slug: 'sample-article-05',
    category: 'Culture',
    minutes: 4,
    title: 'A fifth sample article, reached by swiping or the dots',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-03-10',
  },
  {
    slug: 'sample-article-06',
    category: 'Craft',
    minutes: 7,
    title: 'A sixth sample article to fill out the carousel',
    excerpt: 'Placeholder excerpt. One or two sentences that set up the article and give a reason to read on.',
    date: '2026-03-26',
  },
]

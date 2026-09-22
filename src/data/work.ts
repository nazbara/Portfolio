/**
 * PLACEHOLDER CONTENT — sample projects so the Work section has something to show.
 * Replace with real projects when they exist. To give an entry an image, drop a file named
 * `<slug>.webp` into src/assets/work (see src/lib/media.ts); until then it shows generated art.
 */
export interface WorkItem {
  slug: string
  title: string
  categories: string[]
  summary: string
}

export const workHeading = 'Our work'

export const workCta = { label: 'View all work', to: '/work' } as const

export const workItems: WorkItem[] = [
  {
    slug: 'sample-project-01',
    title: 'Sample Project 01',
    categories: ['Brand Identity', 'UI/UX Design'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
  {
    slug: 'sample-project-02',
    title: 'Sample Project 02',
    categories: ['Product'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
  {
    slug: 'sample-project-03',
    title: 'Sample Project 03',
    categories: ['Marketing', 'Brand Identity'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
  {
    slug: 'sample-project-04',
    title: 'Sample Project 04',
    categories: ['UI/UX Design'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
  {
    slug: 'sample-project-05',
    title: 'Sample Project 05',
    categories: ['Product', 'Marketing'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
  {
    slug: 'sample-project-06',
    title: 'Sample Project 06',
    categories: ['Brand Identity'],
    summary: 'Placeholder summary — a short line about the brief, the approach and the result.',
  },
]

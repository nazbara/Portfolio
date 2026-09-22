/**
 * To give an entry an image, drop a file named `<slug>.webp` into src/assets/work (see
 * src/lib/media.ts); until then it shows generated art.
 */
export interface WorkItem {
  slug: string
  title: string
  categories: string[]
  summary: string
  link?: string
}

export const workHeading = 'Our work'

export const workCta = { label: 'View all work', to: '/work' } as const

export const workItems: WorkItem[] = [
  {
    slug: 'jcs-ilearn',
    title: 'JCS iLearn',
    categories: ['EdTech', 'Product'],
    summary:
      'A skills learning platform — programs, assessments and certificates to help learners build job-ready skills.',
    link: 'https://www.jcsilearn.com',
  },
  {
    slug: 'suthikshan-portfolio',
    title: 'Suthikshan — Developer Portfolio',
    categories: ['Portfolio', 'Web Design'],
    summary: 'A personal developer portfolio site.',
    link: 'https://suthikshan-portfolio-lac-delta-34.vercel.app/',
  },
  {
    slug: 'tharun-portfolio',
    title: 'Tharun — Developer Portfolio',
    categories: ['Portfolio', 'Web Design'],
    summary: 'A personal developer portfolio site.',
    link: 'https://tharun-portfolio-olive.vercel.app/',
  },
  {
    slug: 'ams-bluekode',
    title: 'AMS — Bluekode',
    categories: ['Real Estate', 'SaaS'],
    summary: 'An apartment/society management platform for residents and admins.',
    link: 'https://www.ams.bluekode.com',
  },
  {
    slug: 'jcs-ilearn-portal',
    title: 'JCS iLearn — Assessment Portal',
    categories: ['EdTech', 'Assessment'],
    summary: 'The assessment portal powering JCS iLearn — MCQ, coding and psychometric tests.',
    link: 'https://www.portal.jcsilearn.com',
  },
  {
    slug: 'civicflow-ai',
    title: 'CivicFlow AI',
    categories: ['Civic Tech', 'AI'],
    summary: 'An AI-powered civic issue reporting platform — report, analyze, assign, resolve, monitor.',
    link: 'https://civicflow-plum.vercel.app/en',
  },
]

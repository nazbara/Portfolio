/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER CONTENT — replace with the real Nezbara services  ║
 * ╚════════════════════════════════════════════════════════════════╝
 * Group titles, slugs, descriptions and item labels below are dummy text so the navbar
 * dropdown and the Services section can be built and tested. Keep the shape; swap the values.
 *
 * `slug` routes the section row to /services/:slug. `items` are the tag pills on the row and
 * the links in the navbar dropdown (each item also has its own /services/:slug page).
 */
export type ServiceItem = { slug: string; label: string }
export type ServiceGroup = { slug: string; title: string; description: string; items: ServiceItem[] }

/** PLACEHOLDER heading for the Services section. */
export const servicesHeading = 'What we do.'

export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'strategy',
    title: 'Strategy',
    description: 'A clear position and a plan the whole team can follow, settled before a single pixel is drawn.',
    items: [
      { slug: 'brand-strategy', label: 'Brand Strategy' },
      { slug: 'market-research', label: 'Market Research' },
      { slug: 'positioning', label: 'Positioning' },
    ],
  },
  {
    slug: 'creative',
    title: 'Creative',
    description: 'Identity, campaigns and film that give your brand a voice people recognise at a glance.',
    items: [
      { slug: 'identity-design', label: 'Identity Design' },
      { slug: 'campaigns', label: 'Campaigns' },
      { slug: 'video-production', label: 'Video Production' },
    ],
  },
  {
    slug: 'digital',
    title: 'Digital',
    description: 'Websites and products that load fast, read well and stay simple to keep improving.',
    items: [
      { slug: 'web-design', label: 'Web Design' },
      { slug: 'web-development', label: 'Web Development' },
      { slug: 'landing-pages', label: 'Landing Pages' },
    ],
  },
  {
    slug: 'growth',
    title: 'Growth',
    description: 'Search, social and paid programmes measured against the outcomes you actually care about.',
    items: [
      { slug: 'seo', label: 'SEO' },
      { slug: 'social-media', label: 'Social Media' },
      { slug: 'performance-marketing', label: 'Performance Marketing' },
    ],
  },
]

export const serviceHref = (slug: string) => `/services/${slug}`

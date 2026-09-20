/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER CONTENT — replace with the real Nezbara services  ║
 * ╚════════════════════════════════════════════════════════════════╝
 * Group titles, labels and slugs below are dummy text so the navbar
 * dropdown can be built and tested. Keep the shape; swap the values.
 */
export type ServiceItem = { slug: string; label: string }
export type ServiceGroup = { title: string; items: ServiceItem[] }

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Strategy',
    items: [
      { slug: 'brand-strategy', label: 'Brand Strategy' },
      { slug: 'market-research', label: 'Market Research' },
      { slug: 'positioning', label: 'Positioning' },
    ],
  },
  {
    title: 'Creative',
    items: [
      { slug: 'identity-design', label: 'Identity Design' },
      { slug: 'campaigns', label: 'Campaigns' },
      { slug: 'video-production', label: 'Video Production' },
    ],
  },
  {
    title: 'Digital',
    items: [
      { slug: 'web-design', label: 'Web Design' },
      { slug: 'web-development', label: 'Web Development' },
      { slug: 'landing-pages', label: 'Landing Pages' },
    ],
  },
  {
    title: 'Growth',
    items: [
      { slug: 'seo', label: 'SEO' },
      { slug: 'social-media', label: 'Social Media' },
      { slug: 'performance-marketing', label: 'Performance Marketing' },
    ],
  },
]

export const serviceHref = (slug: string) => `/services/${slug}`

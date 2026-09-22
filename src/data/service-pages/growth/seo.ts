import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/seo. */
export const seoPage: ServicePage = {
  slug: 'seo',
  title: 'SEO',
  hero: { label: 'Growth', lines: ['SEO', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach seo. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'A technical audit that maps crawl-budget waste, not just a keyword list',
      "Content built around the exact question a buyer types right before they're ready to purchase",
      'Internal linking engineered to move authority to money pages, not left to chance',
      "Monthly 'what changed' reports tied to algorithm updates, so you know why rankings moved",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Technical audit', 'Strategy and keyword mapping', 'Implementation and content', 'Monitoring and reporting'],
  },
  faq: [
    { q: 'How long until we see results?', a: "Technical fixes can move quickly, but meaningful ranking movement typically takes a few months — we'll flag realistic timelines upfront, not inflate them." },
    { q: 'Do you just chase keyword volume?', a: "No — we target the exact question a buyer types right before they're ready to purchase, not just high-traffic, low-intent terms." },
    { q: 'Will you touch our existing content, or only write new pages?', a: "Both — we audit what's already ranking and fix underperforming pages before creating new ones." },
    { q: "How do we know what's actually working month to month?", a: "You get a 'what changed' report tied to real algorithm updates, so movement is explained, not just logged." },
  ],
}

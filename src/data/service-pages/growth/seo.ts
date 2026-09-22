import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/seo. */
export const seoPage: ServicePage = {
  slug: 'seo',
  title: 'SEO',
  hero: { label: 'Growth', lines: ['Rank on Google.', 'Get', 'cited by AI.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'SEO gets your pages ranked in search results. AEO, or answer engine optimisation, structures that same content so AI engines like ChatGPT and Google AI Overviews can pull it out and cite it as the answer. Search has split into these two lanes, and we build for both from the same technical and content base.',
      'Treating them as separate projects just doubles the work and leaves gaps. One strategy, one foundation, both outcomes.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
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
    intro: 'A strategic approach to unifying your corporate voice and messaging framework.',
    steps: ['Technical audit', 'Strategy and keyword mapping', 'Implementation and content', 'Monitoring and reporting'],
  },
  faq: [
    { q: 'How long until we see results?', a: "Technical fixes can move quickly, but meaningful ranking movement typically takes a few months — we'll flag realistic timelines upfront, not inflate them." },
    { q: 'Do you just chase keyword volume?', a: "No — we target the exact question a buyer types right before they're ready to purchase, not just high-traffic, low-intent terms." },
    { q: 'Will you touch our existing content, or only write new pages?', a: "Both — we audit what's already ranking and fix underperforming pages before creating new ones." },
    { q: "How do we know what's actually working month to month?", a: "You get a 'what changed' report tied to real algorithm updates, so movement is explained, not just logged." },
  ],
}

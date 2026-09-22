import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/landing-pages. */
export const landingPagesPage: ServicePage = {
  slug: 'landing-pages',
  title: 'Landing Pages',
  hero: { label: 'Digital', lines: ['Campaign pages built', 'fast, built', 'to convert.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'A landing page is a focused, single-goal page built for a specific campaign and made to convert the traffic you are already paying for. A page that takes weeks to build arrives after the campaign has lost momentum. We build focused, fast-turnaround pages designed around one clear action.',
      'Every element earns its place or it goes. On a landing page, anything that does not push toward the goal is just something to distract the visitor.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
    items: ['Campaign-specific landing pages', 'A/B-testable page builds', 'Mobile-first design', 'Fast-turnaround development, usually 1 to 2 weeks'],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A strategic approach to unifying your corporate voice and messaging framework.',
    steps: ['Campaign goal and brief', 'Design', 'Build', 'Launch and handover'],
  },
  faq: [
    { q: 'What is included in landing pages?', a: 'Copy-ready wireframes, a fully designed high-conversion page, mobile-responsive build, and basic on-page SEO setup.' },
    { q: 'Can you work with what we already have?', a: 'Yes — we can design within your existing brand guidelines or rebuild a page that isnt converting.' },
    { q: 'What do we receive at the end?', a: 'You receive the completed landing page, along with any necessary assets and documentation.' },
    { q: 'How long does a project take?', a: 'Most landing page projects are completed within 1-2 weeks, depending on complexity.' },
  ],
}

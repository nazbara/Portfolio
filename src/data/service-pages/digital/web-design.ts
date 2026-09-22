import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/web-design (UI/UX Design). */
export const webDesignPage: ServicePage = {
  slug: 'web-design',
  title: 'UI/UX Design',
  hero: { label: 'Digital', lines: ['UI/UX DESIGN', 'SHAPED', 'BY YOUR USERS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      "Great design starts with clarity, not colour palettes. Before we open a design tool, we sit down with you to understand your users, your business goals, and what success actually looks like. Only once that's agreed do we start shaping screens.",
      "Working with us means direct access to the people doing the work — no account managers relaying messages. You'll get a small senior team, clear updates at every stage, and a design system built to be extended long after we hand it over.",
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped around your goals — these are the building blocks we combine to get you there.',
    items: [
      'Real click-testing with actual users before a single pixel reaches development',
      'A component-level design system, so new pages ship in hours, not weeks',
      'Motion and micro-interaction specs hand-off ready — no guesswork for engineering',
      "A conversion audit against your funnel's actual drop-off points, not generic best practice",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Research and user flows', 'Wireframes and prototyping', 'Visual design and testing', 'Handover and QA'],
  },
  faq: [
    { q: 'Do you test designs with real users, or just present mockups?', a: 'We run real click-testing with actual users before anything reaches development, so decisions are based on behavior, not opinion.' },
    { q: 'Will our developers be able to build what you design?', a: 'Yes — we hand off a component-level design system with interaction specs, built to be implemented without guesswork.' },
    { q: 'Can you redesign part of our product without touching everything?', a: 'Yes, we can scope this to a specific flow or feature rather than a full redesign.' },
    { q: 'How do you know the new design will convert better?', a: "We audit your funnel's actual drop-off points first, so design decisions target where users are really leaving, not textbook best practice." },
  ],
}

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
    items: ['User research and journey mapping', 'Wireframes and information architecture', 'High-fidelity UI design and prototyping', 'Design systems and developer handoff'],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Discovery and research', 'Information Design', 'Interface Design', 'Design Delivery'],
  },
  faq: [
    { q: 'What is included in ui/ux design?', a: 'Research, user flows, wireframes, high-fidelity UI screens, prototypes, and a reusable design system.' },
    { q: 'Can you work with what we already have?', a: 'Yes — we can build on an existing brand, design system, or codebase rather than starting from zero.' },
    { q: 'What do we receive at the end?', a: 'Final design files, a component library, and documentation your developers can implement directly from.' },
    { q: 'How long does a project take?', a: 'Most UI/UX engagements run 4–8 weeks depending on scope, with clear milestones along the way.' },
  ],
}

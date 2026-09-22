import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/social-media (SMMA). */
export const socialMediaPage: ServicePage = {
  slug: 'social-media',
  title: 'SMMA',
  hero: { label: 'Growth', lines: ['SMMA', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach smma. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: ['Placeholder: discovery and research', 'Placeholder: strategy and planning', 'Placeholder: design and build', 'Placeholder: launch and support'],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Discovery and research', 'Planning and direction', 'Design and build', 'Launch and handover'],
  },
  faq: [
    { q: 'Placeholder: what is included in smma?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: can you work with what we already have?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: what do we receive at the end?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: how long does a project take?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
  ],
}

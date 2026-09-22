import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/video-production. */
export const videoProductionPage: ServicePage = {
  slug: 'video-production',
  title: 'Video Production',
  hero: { label: 'Creative', lines: ['Video planned to', 'perform, not just look', 'good.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Video production here means planning video around where and how your audience will actually watch it, from the first concept through the final cut. A beautiful film that does not fit its channel is a wasted budget. We plan for distribution before we plan the shoot.',
      'One well-planned shoot can feed a whole campaign. We build for that, capturing the longer film and the short cuts together instead of going back for more.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
    items: ['Concept development and scripting', 'Shoot production and direction', 'Editing and post-production', 'Short-form and campaign video cutdowns'],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A strategic approach to unifying your corporate voice and messaging framework.',
    steps: ['Concept and scripting', 'Pre-production planning', 'Shoot', 'Edit, post-production and delivery'],
  },
  faq: [
    { q: 'Placeholder: what is included in video production?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: can you work with what we already have?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: what do we receive at the end?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    { q: 'Placeholder: how long does a project take?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
  ],
}

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
    { q: 'How many videos can you get from one shoot day?', a: 'We plan each shoot to output 10+ platform-native cuts, not just the one hero video.' },
    { q: 'Do you write the script, or do we need to provide one?', a: 'We handle concept and scripting as part of the process, starting from your goals and key messages.' },
    { q: 'Can we reuse the raw footage later without you?', a: "Yes — you receive the full raw footage archive, so future edits don't require rebooking a crew." },
    { q: 'How do you make sure the video performs, not just looks good?', a: 'We test multiple opening seconds before committing to a full edit, since the hook decides whether anyone watches the rest.' },
  ],
}

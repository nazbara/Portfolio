import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/video-production. */
export const videoProductionPage: ServicePage = {
  slug: 'video-production',
  title: 'Video Production',
  hero: { label: 'Creative', lines: ['VIDEO PRODUCTION', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach video production. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Hook-testing — 3 opening seconds shot and tested before we commit to a full edit',
      'Repurposing engineered in from day one — one shoot day, 10+ platform-native cuts',
      'Captions designed as part of the frame, not an overlay bolted on after',
      "The raw footage archive handed over, so future edits don't mean rebooking a crew",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Concept and scripting', 'Pre-production and planning', 'Filming and production', 'Edit, review and delivery'],
  },
  faq: [
    { q: 'How many videos can you get from one shoot day?', a: 'We plan each shoot to output 10+ platform-native cuts, not just the one hero video.' },
    { q: 'Do you write the script, or do we need to provide one?', a: 'We handle concept and scripting as part of the process, starting from your goals and key messages.' },
    { q: 'Can we reuse the raw footage later without you?', a: "Yes — you receive the full raw footage archive, so future edits don't require rebooking a crew." },
    { q: 'How do you make sure the video performs, not just looks good?', a: 'We test multiple opening seconds before committing to a full edit, since the hook decides whether anyone watches the rest.' },
  ],
}

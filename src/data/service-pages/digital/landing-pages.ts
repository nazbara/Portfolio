import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/landing-pages. */
export const landingPagesPage: ServicePage = {
  slug: 'landing-pages',
  title: 'Landing Pages',
  hero: { label: 'Digital', lines: ['LANDING PAGES', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach landing pages. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      '3 headline variants pre-loaded for A/B testing from launch day',
      'A hard 2-second load budget enforced before it ships',
      'A form-friction audit — every field justified or cut, based on real drop-off data',
      'A heatmap review built into the first two weeks, not an optional add-on',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Brief and conversion research', 'Wireframe and copy', 'Design and build', 'Launch and test'],
  },
  faq: [
    { q: 'Do you build one page, or set it up for testing multiple versions?', a: 'Every page ships with headline variants pre-loaded for A/B testing from day one.' },
    { q: 'How fast will the page actually load?', a: 'We enforce a hard 2-second load budget before anything goes live.' },
    { q: 'Why do you ask about every form field before building?', a: 'Every field is justified or cut based on real drop-off data — fewer unnecessary fields means fewer abandoned forms.' },
    { q: 'Do you help after launch, or is it a one-off build?', a: 'We build in a heatmap review for the first two weeks post-launch, so early data feeds straight into adjustments.' },
  ],
}

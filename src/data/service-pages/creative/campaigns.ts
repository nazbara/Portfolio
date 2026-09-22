import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/campaigns. */
export const campaignsPage: ServicePage = {
  slug: 'campaigns',
  title: 'Campaigns',
  hero: { label: 'Creative', lines: ['CAMPAIGNS', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach campaigns. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Creative built and tested in 3 variants before launch, not one gut-feel version',
      "Kill criteria agreed before spend starts, so nobody's guessing when to pull an underperforming ad",
      'Platform-native versioning — reformatted for how each channel actually behaves, not resized once',
      'A live performance dashboard your team can check any time, not a monthly PDF',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Brief and audience research', 'Creative concept and planning', 'Production and testing', 'Launch and optimization'],
  },
  faq: [
    { q: 'How do you decide which creative direction to run with?', a: 'We build and test multiple variants before committing spend, instead of betting the whole budget on one gut-feel idea.' },
    { q: 'What happens if a campaign underperforms mid-flight?', a: "We agree kill criteria before launch, so there's a clear, pre-agreed point to pause or pivot — no guessing in the moment." },
    { q: 'Do you handle both the creative and the media buying?', a: 'Yes, we handle strategy, creative and platform-native execution together, so nothing gets lost in translation between teams.' },
    { q: 'How do we track performance during the campaign?', a: 'You get access to a live dashboard, not a report that arrives after the campaign has already ended.' },
  ],
}

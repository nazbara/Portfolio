import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/campaigns. */
export const campaignsPage: ServicePage = {
  slug: 'campaigns',
  title: 'Campaigns',
  hero: { label: 'Creative', lines: ['ADS TESTED', 'BEFORE YOUR BUDGET', 'IS ON THE LINE.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Every campaign starts with the same question: what result are we actually trying to drive? Once that\'s clear, the creative, the channels, and the targeting all follow from it — instead of us pitching you a concept and hoping the numbers work out.',
      'Expect direct communication with the people running your campaign, creative tested against real audiences before launch, and performance tracked closely enough that underperforming ads get cut early, not discovered at the end of the month.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped to your goals. These are the building blocks we combine.',
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
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Brief and audience research', 'Creative concept and planning', 'Production and testing', 'Launch and optimization'],
  },
  faq: [
    { q: 'How do you decide which creative direction to run with?', a: 'We build and test multiple variants before committing spend, instead of betting the whole budget on one gut-feel idea.' },
    { q: 'What happens if a campaign underperforms mid-flight?', a: "We agree kill criteria before launch, so there's a clear, pre-agreed point to pause or pivot — no guessing in the moment." },
    { q: 'Do you handle both the creative and the media buying?', a: 'Yes, we handle strategy, creative and platform-native execution together, so nothing gets lost in translation between teams.' },
    { q: 'How do we track performance during the campaign?', a: 'You get access to a live dashboard, not a report that arrives after the campaign has already ended.' },
  ],
}

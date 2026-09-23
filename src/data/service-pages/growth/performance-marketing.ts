import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/performance-marketing. */
export const performanceMarketingPage: ServicePage = {
  slug: 'performance-marketing',
  title: 'Performance Marketing',
  hero: { label: 'Growth', lines: ['Paid campaigns', 'optimised for', 'pipeline, not', 'cost-per-click'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Performance marketing is paid advertising built and optimised around what happens after the click, leads and revenue, rather than around a low cost-per-click on its own. A cheap click that never becomes a lead is not a saving. We run campaigns across Google, Meta and other channels and optimise them against the pipeline they produce.',
      'The ad is only half the job. What the click lands on, and what happens next, decides whether the spend pays off.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'Creative fatigue tracking — ads get refreshed before performance drops, not after',
      'Full-funnel tracking wired before spend starts, so every dollar is traceable',
      'A weekly kill-or-scale cadence, not a monthly report that arrives too late to act on',
      'Landing page and ad copy tested as one unit, never handed off separately',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a result your team can run with.',
    steps: ['Audit and funnel mapping', 'Campaign build and tracking setup', 'Launch and testing', 'Scale and optimize'],
  },
  faq: [
    { q: 'How do you know when to scale versus pause an ad?', a: 'We run a weekly kill-or-scale review, so decisions happen on a fast cadence instead of waiting for a monthly report.' },
    { q: 'Is tracking set up before or after the campaign launches?', a: 'Before — full-funnel tracking is wired in ahead of spend, so every dollar is traceable from day one.' },
    { q: 'Do you handle the landing page too, or just the ads?', a: 'We test landing page and ad copy together as one unit, since they need to work as a pair, not separately.' },
    { q: "What happens when an ad's performance starts dropping?", a: 'We track creative fatigue and refresh ads proactively, before performance drops rather than after.' },
  ],
}

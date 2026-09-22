import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/performance-marketing. */
export const performanceMarketingPage: ServicePage = {
  slug: 'performance-marketing',
  title: 'Performance Marketing',
  hero: { label: 'Growth', lines: ['PERFORMANCE MARKETING', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach performance marketing. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
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
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Audit and funnel mapping', 'Campaign build and tracking setup', 'Launch and testing', 'Scale and optimize'],
  },
  faq: [
    { q: 'How do you know when to scale versus pause an ad?', a: 'We run a weekly kill-or-scale review, so decisions happen on a fast cadence instead of waiting for a monthly report.' },
    { q: 'Is tracking set up before or after the campaign launches?', a: 'Before — full-funnel tracking is wired in ahead of spend, so every dollar is traceable from day one.' },
    { q: 'Do you handle the landing page too, or just the ads?', a: 'We test landing page and ad copy together as one unit, since they need to work as a pair, not separately.' },
    { q: "What happens when an ad's performance starts dropping?", a: 'We track creative fatigue and refresh ads proactively, before performance drops rather than after.' },
  ],
}

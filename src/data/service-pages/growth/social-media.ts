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
    items: [
      "Platform-native content, shot and cut for how each app actually behaves — not one asset resized everywhere",
      "A response playbook so comments and DMs stay on-brand even when we're not online",
      'A trend-jacking process built to move fast without breaking tone',
      "Sentiment reporting on what people are actually saying, not just a follower count",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Audit and strategy', 'Content planning and calendar', 'Production and publishing', 'Reporting and iteration'],
  },
  faq: [
    { q: 'Do you post the same content across every platform?', a: 'No — content is shot and cut for how each platform actually behaves, not one asset resized everywhere.' },
    { q: 'Who replies to comments and DMs?', a: 'We run a response playbook built in your brand voice, so replies stay on-brand even outside our working hours.' },
    { q: 'How do you measure success beyond follower count?', a: "We report on sentiment and engagement quality, since followers alone don't tell you if the audience is actually listening." },
    { q: 'Can you move fast on trends without going off-brand?', a: 'Yes — we run a trend-jacking process specifically built to move quickly while staying within your tone guidelines.' },
  ],
}

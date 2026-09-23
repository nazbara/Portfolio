import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/social-media (SMMA). */
export const socialMediaPage: ServicePage = {
  slug: 'social-media',
  title: 'SMMA',
  hero: { label: 'Growth', lines: ['Social media tied to', 'business goals, not', 'post counts.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Social media marketing is the practice of building and running platform-specific content and community that ties back to a real business goal, whether that is visibility, engagement or leads. Posting consistently is not a strategy on its own. We build programmes with a point, and we measure them against it.',
      'Where your audience actually is decides where we invest, not a one-size template that spreads you thin across every platform.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
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

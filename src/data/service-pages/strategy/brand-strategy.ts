import type { ServicePage } from '../types'

export const brandStrategyPage: ServicePage = {
  slug: 'brand-strategy',
  title: 'Brand strategy',
  hero: { label: 'Strategy', lines: ['STRATEGY THAT', 'GIVES EVERY MOVE', 'A DIRECTION.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Strategy comes before style: we define who the brand is for, what it stands for and how it should sound before anything gets designed.',
      'The result is a short, usable playbook your team, agencies and partners can follow, so the brand stays consistent as you grow.',
    ],
    cta: { label: 'Book a strategy call', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'White-space mapping — we find the specific ground nobody else is claiming, not just a list of competitors',
      'A one-page brand thesis, pressure-tested against 3 real customer conversations before a single design decision',
      'Messaging stress-tested against your toughest sales objections, not just workshopped in a room',
      'A 12-month brand roadmap tied to actual business milestones, not just a delivery schedule',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a brand your team can run with.',
    steps: [
      'Discovery and audit',
      'Strategy and positioning',
      'Brand architecture and messaging',
      'Rollout and team handover',
    ],
  },
  faq: [
    {
      q: 'We already have a logo — do we need to start from zero?',
      a: "No. We start with your existing brand and rebuild the strategy underneath it, so you keep what's working and only fix what isn't.",
    },
    {
      q: 'How is this different from just workshopping a new tagline?',
      a: 'A tagline is one output. Strategy gives your team a decision framework — so every future tagline, campaign and hire pulls in the same direction.',
    },
    {
      q: 'Who needs to be involved from our side?',
      a: 'Typically one decision-maker and one or two people close to customers — enough to move fast without losing context.',
    },
    {
      q: 'What do we actually walk away with?',
      a: 'A single strategy document covering positioning, messaging and brand architecture, plus a roadmap your team can execute without us.',
    },
  ],
}

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
      'Positioning and messaging',
      'Audience and market research',
      'Naming and brand architecture',
      'Brand guidelines and rollout plan',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'A clear path from first conversation to a brand your team can run with.',
    steps: [
      'Discovery and research',
      'Positioning workshop',
      'Messaging and identity direction',
      'Guidelines and launch',
    ],
  },
  faq: [
    {
      q: 'How is brand strategy different from design?',
      a: 'Strategy decides what the brand should say and to whom; design gives that decision a look and a voice. Doing them in that order saves rework.',
    },
    {
      q: 'Can you work with an existing brand?',
      a: 'Yes. We start by auditing what you have, keep what already works and only change what holds the brand back.',
    },
    {
      q: 'What do we receive at the end?',
      a: 'A positioning document, a messaging framework and brand guidelines with a rollout plan, all in formats your team can use straight away.',
    },
    {
      q: 'How long does a project take?',
      a: 'Most engagements take four to eight weeks, depending on the amount of research and how many people need to be involved.',
    },
  ],
}

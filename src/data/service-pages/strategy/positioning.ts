import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/positioning. */
export const positioningPage: ServicePage = {
  slug: 'positioning',
  title: 'Positioning',
  hero: { label: 'Strategy', lines: ['POSITIONING', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach positioning. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      "A 'category of one' strategy, engineered so you're compared on your terms, not a commodity list",
      "Messaging stress-tested against your sales team's hardest real objections",
      'A positioning line that survives the elevator test — one breath, remembered a week later',
      "An internal alignment workshop so your whole team tells the same story, whoever's asked",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Discovery and competitive mapping', 'Positioning workshop', 'Messaging and proof points', 'Alignment and rollout'],
  },
  faq: [
    { q: "We're not a startup — is repositioning risky for an established brand?", a: "It's riskier to stay vague. We work within what customers already trust about you and sharpen it, rather than reinventing it." },
    { q: 'How do you make sure the whole team says the same thing?', a: 'We run an alignment workshop and leave you with a one-page reference doc, so sales, marketing and leadership stay in sync without a meeting every time.' },
    { q: 'What if our sales team disagrees with the new positioning?', a: "We stress-test it against their toughest real objections before it's final, so it survives contact with an actual sales call." },
    { q: 'How long before we can start using this?', a: "You'll have usable messaging within the engagement — no waiting for a separate rollout phase." },
  ],
}

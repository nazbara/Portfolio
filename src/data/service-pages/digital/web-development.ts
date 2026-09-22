import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/web-development. */
export const webDevelopmentPage: ServicePage = {
  slug: 'web-development',
  title: 'Web Development',
  hero: { label: 'Digital', lines: ['WEB DEVELOPMENT', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach web development. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      "A performance budget enforced at build time — the build fails if it's not fast, not 'checked later'",
      "A component library built for your content team's self-sufficiency — no dev ticket for a new page",
      "Visual regression testing built in, so redesigns can't silently break old pages",
      "A documented handover repo, so you're never locked into us for a small edit",
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Technical discovery and planning', 'Architecture and build', 'Integration and testing', 'Launch and handover'],
  },
  faq: [
    { q: 'Will the site be fast, or just look good?', a: "We enforce a performance budget at build time — if it's not fast enough, the build fails before it ships." },
    { q: 'Can our team edit the site after launch without calling you?', a: 'Yes, we build a component library your content team can use to publish new pages without a developer ticket.' },
    { q: 'What happens if we want to switch developers later?', a: 'You get a fully documented handover repo — nothing proprietary or locked to us.' },
    { q: 'How do you prevent a redesign from breaking pages that already work?', a: 'We build in visual regression testing, so changes are checked against existing pages before they go live.' },
  ],
}

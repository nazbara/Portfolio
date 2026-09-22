import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/identity-design. */
export const identityDesignPage: ServicePage = {
  slug: 'identity-design',
  title: 'Identity Design',
  hero: { label: 'Creative', lines: ['IDENTITY DESIGN', 'BUILT AROUND', 'YOUR GOALS.'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Placeholder: how we approach identity design. We start with your goals, agree what good looks like and only then decide what to make.',
      'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
    items: [
      'A system tested at both extremes — shrunk to a favicon and blown up to a billboard — before delivery',
      'A motion identity from day one, not just a static logo file',
      "A 'misuse' guide showing exactly what not to do, so consistency survives without you policing every file",
      'Accessibility contrast built into every color pairing, not checked after the fact',
    ],
  },
  process: {
    label: 'Process',
    heading: 'Step by step',
    intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
    steps: ['Discovery and research', 'Concept exploration', 'System design and build', 'Launch and guidelines handover'],
  },
  faq: [
    { q: 'Can you redesign our identity without losing brand recognition?', a: "Yes — we usually evolve rather than replace, keeping the elements customers already recognize while fixing what's holding you back." },
    { q: 'Do you design for both digital and print?', a: 'Every system we build is tested at both extremes — shrunk to a favicon and blown up to a billboard — before it ships.' },
    { q: 'What if our team needs to create assets themselves later?', a: "You'll get a full guidelines doc, including a misuse guide, so your team can create on-brand assets without checking with us first." },
    { q: 'Do we own the final files outright?', a: 'Yes, full source files and usage rights transfer to you at handover.' },
  ],
}

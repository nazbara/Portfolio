import type { ServicePage } from '../types'

/** PLACEHOLDER CONTENT — /services/identity-design. */
export const identityDesignPage: ServicePage = {
  slug: 'identity-design',
  title: 'Identity Design',
  hero: { label: 'Creative', lines: ['Visuals built to', 'communicate,', 'not just', 'decorate'] },
  approach: {
    label: 'Approach',
    paragraphs: [
      'Design here means purpose-built visual work made to solve a specific problem and communicate clearly, across decks, collateral, reports, ads and infographics. Too much design just fills a layout with something that looks nice. We start from what the piece has to achieve, then design toward it.',
      'Clear beats clever most of the time. A well-designed report or deck earns attention because people can follow it, not just because it looks polished.',
    ],
    cta: { label: 'Talk to us', to: '/contact' },
  },
  includes: {
    label: 'Scope',
    heading: "What's in the package",
    intro: 'Every message is crafted to build trust and authority across all your stakeholder groups.',
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
    intro: 'A strategic approach to unifying your corporate voice and messaging framework.',
    steps: ['Discovery and research', 'Concept exploration', 'System design and build', 'Launch and guidelines handover'],
  },
  faq: [
    { q: 'Can you redesign our identity without losing brand recognition?', a: "Yes — we usually evolve rather than replace, keeping the elements customers already recognize while fixing what's holding you back." },
    { q: 'Do you design for both digital and print?', a: 'Every system we build is tested at both extremes — shrunk to a favicon and blown up to a billboard — before it ships.' },
    { q: 'What if our team needs to create assets themselves later?', a: "You'll get a full guidelines doc, including a misuse guide, so your team can create on-brand assets without checking with us first." },
    { q: 'Do we own the final files outright?', a: 'Yes, full source files and usage rights transfer to you at handover.' },
  ],
}

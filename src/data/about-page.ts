/**
 * ╔═════════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER COPY — original text for the /about page. Every string ║
 * ║  here (and every name, role and claim) is a stand-in: replace it    ║
 * ║  with the real Nezbara story before launch.                         ║
 * ╚═════════════════════════════════════════════════════════════════════╝
 * The sections in src/sections/about/ read only this file. Images live in src/assets/founders
 * (`<founder slug>.webp`) and src/assets/about (`last-img.webp`, the Long-term partners background) — see src/lib/media.ts.
 */

export const aboutHero = {
  label: 'About Nezbara',
  /** Three lines, set uppercase; they alternate white / slate / white. */
  lines: ['A DESIGN-LED', 'DIGITAL', 'STUDIO'],
  cta: { label: 'Work with us', to: '/contact' },
} as const

export const introBand = {
  lead: 'Placeholder story. Nezbara began as a small studio that liked making things properly, and has grown into a team of designers, engineers and strategists who plan, build and look after digital products from the first sketch to the tenth release. We keep the group small and senior so that every project gets the attention it was hired for.',
  side: 'Placeholder note: a shorter paragraph about how the studio works, what it cares about and the kind of teams it likes to partner with.',
} as const

export const teams = {
  intro:
    'Placeholder introduction. We organise around four small teams that work side by side, so a project never waits on a hand-off and every decision has an owner.',
  items: [
    {
      title: 'The Strategy Team',
      description: 'Placeholder: turns a fuzzy goal into a clear brief, a plan and the few numbers worth watching.',
    },
    {
      title: 'The Design Team',
      description: 'Placeholder: shapes the identity, the interface and the details that make the product feel finished.',
    },
    {
      title: 'The Engineering Team',
      description: 'Placeholder: builds fast, accessible software and keeps it simple enough to change next month.',
    },
    {
      title: 'The Growth Team',
      description: 'Placeholder: launches, measures and improves, so the work keeps earning after release day.',
    },
  ],
} as const

export const founders = {
  label: 'Leadership',
  heading: 'Founders',
  people: [
    { slug: 'tharun-balaji-s', name: 'Tharun Balaji S', role: 'Founder & CEO' },
    { slug: 'sanjay-j', name: 'Sanjay J', role: 'Co-Founder, Operations' },
  ],
} as const

export const values = {
  heading: 'Our principles',
  subline: 'Placeholder: three short ideas we hold ourselves to on every project.',
  items: [
    {
      word: '[CRAFT]',
      label: 'Craft',
      description: 'Placeholder: we sweat the details nobody asks about, because they are what people feel.',
    },
    {
      word: '[CLARITY]',
      label: 'Clarity',
      description: 'Placeholder: plain words, honest scopes and decisions that anyone on the team can explain.',
    },
    {
      word: '[CARE]',
      label: 'Care',
      description: 'Placeholder: we treat your product and your people as if they were our own, long after launch.',
    },
  ],
} as const

export const embedded = {
  label: 'Long-term partners',
  /** Three lines, set uppercase. */
  heading: ['We stay with clients', 'well beyond', 'launch day.'],
  lead: 'Placeholder: we work as a long-term extension of the teams we join, not a supplier that disappears once the invoice is paid.',
  body: 'Placeholder: from the first workshop to the tenth release, the same people stay involved, so what we learn on one project makes the next one better.',
} as const

export const aboutContact = {
  heading: 'Ready to start?',
} as const

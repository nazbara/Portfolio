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
  lead: "Nezbara started at a desk with too many browser tabs open and one rule that stuck: do it properly, or don't ship it. That's grown into a studio of designers, engineers and strategists who stay with a product from first sketch to tenth release. We keep the team small and senior, so every project gets the care it deserves.",
  side: "Nezbara works closely with founders who know what they want, moving fast without cutting corners, and staying invested in a product long after launch.",
} as const

export const teams = {
  /** Three lines, set uppercase (same shape as embedded.heading). */
  heading: ['The Ecosystem Model:', 'Specialized Roles. One', 'Unified Engine.'],
  intro:
    'We do not believe in generalist pools or flat execution. Our team operates as a highly synchronized corporate communications ecosystem where every executive owns a distinct, hyper-specialized function.',
  items: [
    {
      title: 'The Strategy Team',
      description: 'Turns a fuzzy goal into a clear brief, a plan and the few numbers worth watching.',
    },
    {
      title: 'The Design Team',
      description: 'Shapes the identity, the interface and the details that make the product feel finished.',
    },
    {
      title: 'The Engineering Team',
      description: 'Builds fast, accessible software and keeps it simple enough to change next month.',
    },
    {
      title: 'The Growth Team',
      description: 'Launches, measures and improves, so the work keeps earning after release day.',
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
  subline: '3C - Short ideas we hold ourselves to on every project.',
  items: [
    {
      word: '[CRAFT]',
      label: 'Craft',
      description: 'We sweat the details nobody asks about, because they are what people feel.',
    },
    {
      word: '[CLARITY]',
      label: 'Clarity',
      description: 'Plain words, honest scopes and decisions that anyone on the team can explain.',
    },
    {
      word: '[CARE]',
      label: 'Care',
      description: 'We treat your product and your people as if they were our own, long after launch.',
    },
  ],
} as const

export const embedded = {
  label: 'Long-term partners',
  /** Three lines, set uppercase. */
  heading: ['We stay with clients', 'well beyond', 'launch day.'],
  lead: 'We work as a long-term extension of the teams we join, not a supplier that disappears once the invoice is paid.',
  body: 'From the first workshop to the tenth release, the same people stay involved, so what we learn on one project makes the next one better.',
} as const

export const aboutContact = {
  heading: 'Ready to start?',
} as const

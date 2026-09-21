/**
 * ╔═════════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER COPY — original text for the /services/:slug pages.    ║
 * ║  Replace every string with the real Nezbara service copy.           ║
 * ╚═════════════════════════════════════════════════════════════════════╝
 * `brand-strategy` has full hand-written content. Every other slug the nav, footer or the Services
 * section links to (a service item OR a service group in services.ts) gets a generic page built from
 * its title with the same template, so nothing 404s or looks empty. Images are picked up from
 * src/assets/services/<slug>-approach.webp (see src/lib/media.ts); until then the slots are placeholders.
 */
import { serviceGroups } from '@/data/services'

export type ServicePage = {
  slug: string
  title: string
  hero: { label: string; lines: string[] }
  approach: { label: string; paragraphs: string[]; cta: { label: string; to: string } }
  includes: { label: string; heading: string; intro: string; items: string[] }
  process: { label: string; heading: string; intro: string; steps: string[] }
  faq: { q: string; a: string }[]
  testimonialsLabel: string
  contact: { heading: string; body: string }
}

/** Headings shared by every service page. */
export const serviceCommon = {
  relatedWorkHeading: 'Related work',
  relatedArticlesHeading: 'Related articles',
  faqHeading: 'Frequently asked questions',
} as const

const brandStrategy: ServicePage = {
  slug: 'brand-strategy',
  title: 'Brand strategy',
  hero: { label: 'Brand', lines: ['STRATEGY THAT', 'GIVES EVERY MOVE', 'A DIRECTION.'] },
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
  testimonialsLabel: 'Kind words',
  contact: {
    heading: 'Ready to shape your brand?',
    body: "Tell us where you are and where you want to be. We'll suggest a sensible first step.",
  },
}

/** Generic page for any other service item / group: the same template, filled in from its title. */
function generic(slug: string, title: string, groupTitle?: string): ServicePage {
  const lower = title.toLowerCase()
  return {
    slug,
    title,
    hero: { label: groupTitle ?? 'Services', lines: [title.toUpperCase(), 'BUILT AROUND', 'YOUR GOALS.'] },
    approach: {
      label: 'Approach',
      paragraphs: [
        `Placeholder: how we approach ${lower}. We start with your goals, agree what good looks like and only then decide what to make.`,
        'Placeholder: what you can expect from working with us: clear communication, a small senior team and work that is easy to keep improving.',
      ],
      cta: { label: 'Talk to us', to: '/contact' },
    },
    includes: {
      label: 'Scope',
      heading: "What's in the package",
      intro: 'Placeholder: every engagement is scoped to your goals. These are the building blocks we combine.',
      items: ['Placeholder: discovery and research', 'Placeholder: strategy and planning', 'Placeholder: design and build', 'Placeholder: launch and support'],
    },
    process: {
      label: 'Process',
      heading: 'Step by step',
      intro: 'Placeholder: a clear path from first conversation to a result your team can run with.',
      steps: ['Discovery and research', 'Planning and direction', 'Design and build', 'Launch and handover'],
    },
    faq: [
      { q: `Placeholder: what is included in ${lower}?`, a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
      { q: 'Placeholder: can you work with what we already have?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
      { q: 'Placeholder: what do we receive at the end?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
      { q: 'Placeholder: how long does a project take?', a: 'Placeholder answer. One or two sentences that answer the question plainly.' },
    ],
    testimonialsLabel: 'Kind words',
    contact: {
      heading: 'Ready to get started?',
      body: "Tell us where you are and where you want to be. We'll suggest a sensible first step.",
    },
  }
}

/**
 * The page for /services/:slug, or undefined when the slug is neither `brand-strategy`, a service item
 * nor a service group (the route then shows the 404 page).
 */
export function getServicePage(slug: string): ServicePage | undefined {
  if (slug === brandStrategy.slug) return brandStrategy
  for (const group of serviceGroups) {
    if (group.slug === slug) return generic(slug, group.title)
    const item = group.items.find((i) => i.slug === slug)
    if (item) return generic(slug, item.label, group.title)
  }
  return undefined
}

/**
 * PLACEHOLDER CONTENT — sample resources so the /resources library has something to show.
 * Replace with the real library when it exists — this file is the single place to edit.
 * Thumbnails aren't wired up yet, so every card shows generated art (see PlaceholderArt).
 */
export interface Resource {
  slug: string
  title: string
  /** 1–2 sentence summary. */
  description: string
  /** e.g. 'Templates', 'Checklists', 'Swipe Files', 'AI Prompts', 'Guides'. */
  category: string
  access: 'free' | 'paid'
  /** Only for access: 'paid', e.g. '$12'. */
  price?: string
  /** 'download' = a file card with a Download button; 'prompt' = a card with a Copy Prompt button. */
  format: 'download' | 'prompt'
  /** Placeholder '#' for now — a real file link comes later. */
  fileUrl?: string
  /** Only for format: 'prompt' — the text that gets copied. */
  promptText?: string
  tags: string[]
}

export const resourcesHeading = 'The Library'

export const resourcesIntro =
  'Placeholder intro — free and paid templates, checklists, swipe files and AI design prompts for teams shipping brand and product work.'

export const resources: Resource[] = [
  {
    slug: 'landing-page-wireframe-kit',
    title: 'Landing Page Wireframe Kit',
    description: 'A set of low-fidelity wireframe blocks for common landing page sections — hero, pricing, FAQ and more.',
    category: 'Templates',
    access: 'free',
    format: 'download',
    fileUrl: '#',
    tags: ['Wireframes', 'Landing Page', 'Figma'],
  },
  {
    slug: 'brand-discovery-checklist',
    title: 'Brand Discovery Checklist',
    description: 'Every question we ask in a first brand strategy call, in one printable checklist.',
    category: 'Checklists',
    access: 'free',
    format: 'download',
    fileUrl: '#',
    tags: ['Brand Strategy', 'Discovery', 'Onboarding'],
  },
  {
    slug: 'cold-outreach-swipe-file',
    title: 'Cold Outreach Swipe File',
    description: "12 cold email openers and subject lines we've used to book discovery calls.",
    category: 'Swipe Files',
    access: 'free',
    format: 'download',
    fileUrl: '#',
    tags: ['Outreach', 'Sales', 'Copywriting'],
  },
  {
    slug: 'saas-landing-prompt',
    title: 'Minimal SaaS Landing Page Prompt',
    description: 'A ready-to-paste prompt for generating a clean, dark SaaS landing page concept.',
    category: 'AI Prompts',
    access: 'free',
    format: 'prompt',
    promptText:
      'Minimal SaaS landing page, dark navy background, bold sans-serif headline, single CTA button, generous whitespace — Figma, 1440×1024',
    tags: ['AI Prompts', 'SaaS', 'Landing Page'],
  },
  {
    slug: 'startup-pitch-deck-template',
    title: 'Startup Pitch Deck Template',
    description: 'A 14-slide pitch deck template covering problem, solution, market and ask.',
    category: 'Templates',
    access: 'paid',
    price: '$19',
    format: 'download',
    fileUrl: '#',
    tags: ['Pitch Deck', 'Startup', 'Slides'],
  },
  {
    slug: 'on-page-seo-checklist',
    title: 'On-Page SEO Checklist',
    description: 'The on-page checks we run before a page goes live — titles, meta, headings and internal links.',
    category: 'Checklists',
    access: 'free',
    format: 'download',
    fileUrl: '#',
    tags: ['SEO', 'Content', 'Launch'],
  },
  {
    slug: 'app-onboarding-swipe-file',
    title: 'App Onboarding Swipe File',
    description: 'Screenshots and flows from 20 onboarding sequences worth stealing from.',
    category: 'Swipe Files',
    access: 'paid',
    price: '$12',
    format: 'download',
    fileUrl: '#',
    tags: ['Onboarding', 'Mobile', 'UX'],
  },
  {
    slug: 'brand-mood-board-prompt',
    title: 'Brand Mood Board Prompt',
    description: 'Generate a moodboard-style visual direction from a one-line brand description.',
    category: 'AI Prompts',
    access: 'free',
    format: 'prompt',
    promptText:
      'Editorial brand moodboard, muted earth tones, textured paper background, mix of serif and sans type, 4×4 grid of visual references — Midjourney, --ar 4:5',
    tags: ['AI Prompts', 'Branding', 'Moodboard'],
  },
  {
    slug: 'ecommerce-product-page-prompt',
    title: 'E-commerce Product Page Prompt',
    description: 'A prompt for a clean, conversion-focused product detail page concept.',
    category: 'AI Prompts',
    access: 'free',
    format: 'prompt',
    promptText:
      'E-commerce product page, large product photo left, sticky buy box right, trust badges below the fold, soft neutral background — Figma, 1440×2200',
    tags: ['AI Prompts', 'E-commerce', 'Product Page'],
  },
  {
    slug: 'client-onboarding-guide',
    title: 'Client Onboarding Guide',
    description: 'The step-by-step process we use to onboard a new client in the first week.',
    category: 'Guides',
    access: 'paid',
    price: '$9',
    format: 'download',
    fileUrl: '#',
    tags: ['Onboarding', 'Process', 'Guides'],
  },
]

/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER CONTENT — company details for the footer (and later  ║
 * ║  anywhere else that needs them). Replace every value below.       ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */
export const site = {
  name: 'Nezbara',
  address: 'Placeholder Street, City, State 000000',
  email: 'hello@nezbara.example',
  phone: '+00 00000 00000',
  /** PLACEHOLDER links (href="#") until the real profiles exist. */
  social: [
    { label: 'YouTube', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
} as const

/** Footer "Company" column. */
export const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Insights', to: '/insights' },
] as const

export const privacyHref = '/privacy'

/** `tel:` links want digits only. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`

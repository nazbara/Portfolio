/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║  PLACEHOLDER CONTENT — company details for the footer (and later  ║
 * ║  anywhere else that needs them). Replace every value below.       ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */
export const site = {
  name: 'Nezbara',
  address: '60 Marudhakonar Street, Coimbatore, Tamilnadu',
  email: 'hello.nezbara@gmail.com',
  phone: '+91 7418597037',
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
  { label: 'Resources', to: '/resources' },
] as const

export const privacyHref = '/privacy'

/** `tel:` links want digits only. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`

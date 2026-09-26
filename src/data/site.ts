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
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@Nezbara' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nezbara-89851843a' },
    { label: 'Instagram', href: 'https://www.instagram.com/hello.nezbara?stkn=OWVsMm9nODlud201/' },
  ],
} as const

/** Footer "Company" column. */
export const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  // Resources: hidden from footer until it's ready for launch — page and route stay in place, just unlinked.
] as const

export const privacyHref = '/privacy'

/** `tel:` links want digits only. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`

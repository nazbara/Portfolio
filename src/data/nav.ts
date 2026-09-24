/** Primary navigation. Swap labels/routes here; the Navbar reads only this file. */
export type NavItem =
  | { kind: 'link'; label: string; to: string }
  /** Opens the services panel (content lives in data/services.ts). */
  | { kind: 'dropdown'; label: string; activePrefix: string }

export const navItems: NavItem[] = [
  { kind: 'dropdown', label: 'Services', activePrefix: '/services' },
  { kind: 'link', label: 'Work', to: '/work' },
  { kind: 'link', label: 'About', to: '/about' },
  // Resources: hidden from nav until it's ready for launch — page and route stay in place, just unlinked.
]

/** PLACEHOLDER label — the Navbar and the mobile menu both read it. */
export const navCta = { label: 'Start a project', to: '/contact' }

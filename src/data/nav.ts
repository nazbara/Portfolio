/** Primary navigation. Swap labels/routes here; the Navbar reads only this file. */
export type NavItem =
  | { kind: 'link'; label: string; to: string }
  /** Opens the services panel (content lives in data/services.ts). */
  | { kind: 'dropdown'; label: string; activePrefix: string }

export const navItems: NavItem[] = [
  { kind: 'dropdown', label: 'Services', activePrefix: '/services' },
  { kind: 'link', label: 'Work', to: '/work' },
  { kind: 'link', label: 'About', to: '/about' },
  { kind: 'link', label: 'Insights', to: '/insights' },
]

export const navCta = { label: "Let's Connect", to: '/contact' }

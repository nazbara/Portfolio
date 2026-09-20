import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ChevronIcon from '@/components/ChevronIcon'
import { navCta, navItems } from '@/data/nav'
import { serviceGroups, serviceHref } from '@/data/services'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollLock } from '@/hooks/useScrollLock'
import { ease } from '@/lib/motion'

const bigLink =
  'block w-full py-[0.08em] text-left text-[clamp(2rem,9vw,5.5rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em] transition-colors duration-200'

/** Keeps Tab inside the header (bar + overlay) while the full-screen menu is open. */
function trapFocus(e: KeyboardEvent, root: Element | null | undefined) {
  if (!root) return
  const nodes = Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
    (el) => el.getClientRects().length > 0,
  )
  if (nodes.length === 0) return
  const first = nodes[0]
  const last = nodes[nodes.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

function Overlay({ id }: { id: string }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesId = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>('a, button')?.focus({ preventScroll: true })
  }, [])

  return (
    <motion.div
      ref={ref}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      data-lenis-prevent=""
      className="pointer-events-auto fixed inset-0 flex flex-col bg-ink text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: ease.outExpo }}
    >
      <div className="flex-1 overflow-y-auto overscroll-contain px-(--gutter) pb-6 pt-[calc(var(--header-h)+1.5rem)]">
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 + i * 0.05, ease: ease.outExpo }}
              >
                {item.kind === 'link' ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `${bigLink} ${isActive ? 'text-white' : 'text-white/85'}`}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls={servicesId}
                      onClick={() => setServicesOpen((o) => !o)}
                      className={`${bigLink} flex items-center justify-between text-white/85`}
                    >
                      {item.label}
                      <ChevronIcon
                        className={`h-[0.3em] w-[0.5em] transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          id={servicesId}
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: ease.outExpo }}
                        >
                          <div className="grid gap-x-8 gap-y-6 pb-4 pt-3 sm:grid-cols-2">
                            {serviceGroups.map((group) => (
                              <div key={group.title}>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                                  {group.title}
                                </p>
                                <ul>
                                  {group.items.map((service) => (
                                    <li key={service.slug}>
                                      <Link
                                        to={serviceHref(service.slug)}
                                        className="block py-1.5 text-lg font-medium text-white/85 hover:text-white"
                                      >
                                        {service.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shrink-0 px-(--gutter) pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
        <Link
          to={navCta.to}
          className="flex h-14 items-center justify-center rounded-full bg-paper text-base font-semibold tracking-[0.035em] text-ink shadow-glow"
        >
          {navCta.label}
        </Link>
      </div>
    </motion.div>
  )
}

export default function MobileMenu() {
  const { pathname } = useLocation()
  const [openAt, setOpenAt] = useState<string | null>(null)
  const isDesktop = useMediaQuery('(min-width: 64rem)')
  const open = openAt === pathname && !isDesktop // closes on route change and when resized to desktop
  const menuId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenAt(null)
        buttonRef.current?.focus()
      } else if (e.key === 'Tab') {
        trapFocus(e, buttonRef.current?.closest('header'))
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <AnimatePresence>{open && <Overlay id={menuId} />}</AnimatePresence>

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpenAt(open ? null : pathname)}
        className="pointer-events-auto relative z-10 inline-flex h-(--nav-h) min-w-[5.25rem] items-center justify-center rounded-full border border-(--nav-border) bg-(--nav-bg) px-5 text-(length:--fs-nav) font-semibold text-white backdrop-blur-(--nav-blur)"
      >
        {open ? 'Close' : 'Menu'}
      </button>
    </div>
  )
}

import { MotionConfig } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import MobileMenu from '@/components/MobileMenu'
import ServicesMenu from '@/components/ServicesMenu'
import { navCta, navItems } from '@/data/nav'
import { logoWordmark } from '@/lib/assets'

/**
 * Fixed header: logo left, dark pill centred, white CTA right (a Menu button replaces the
 * pill + CTA below 1024px). Sizes are em-based on --fs-nav, so everything keeps the
 * reference proportions as the viewport changes. The header ignores pointer events itself;
 * only the logo, pill, CTA and Menu button opt back in, so page content stays clickable.
 */
export default function Navbar() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Keeps the light logo readable over white sections. Sits under the header. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-(--z-scrim) h-(--scrim-h) bg-(image:--scrim-bg)"
      />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-(--z-nav)">
        <div className="site-container grid grid-cols-[1fr_auto] items-center pt-(--header-top) text-(length:--fs-nav) lg:grid-cols-[1fr_auto_1fr]">
          {/* Fixed link height keeps the grid row at pill height; the wordmark PNG's transparent padding overflows harmlessly. */}
          <Link
            to="/"
            aria-label="Nezbara — home"
            data-cursor="hover"
            className="pointer-events-auto relative z-10 flex h-[calc(var(--nav-h)+2px)] w-fit items-center justify-self-start"
          >
            <img
              src={logoWordmark}
              alt="Nezbara"
              width={2172}
              height={724}
              draggable={false}
              className="h-auto w-38 max-w-none lg:w-[calc(var(--fs-nav)*11.6)]"
            />
          </Link>

          <div className="pointer-events-auto relative isolate hidden p-px lg:block">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full border border-(--nav-border) bg-(--nav-bg) backdrop-blur-(--nav-blur)"
            />
            <nav aria-label="Primary">
              <ul className="flex h-(--nav-h) items-center px-[0.5em] font-medium">
                {navItems.map((item) =>
                  item.kind === 'dropdown' ? (
                    <ServicesMenu key={item.label} label={item.label} activePrefix={item.activePrefix} />
                  ) : (
                    <li key={item.label} className="flex h-full">
                      <NavLink
                        to={item.to}
                        data-cursor="hover"
                        className={({ isActive }) =>
                          `inline-flex h-full items-center px-[1.17em] transition-colors duration-200 hover:text-white ${
                            isActive ? 'text-white' : 'text-white/85'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-self-end">
            <Link
              to={navCta.to}
              data-cursor="hover"
              className="pointer-events-auto hidden h-(--nav-h) items-center rounded-full bg-paper px-[2em] font-semibold tracking-[0.035em] whitespace-nowrap text-ink shadow-glow transition-[scale,box-shadow] duration-(--dur-base) ease-(--ease-out-expo) hover:scale-[1.03] hover:shadow-(--sh-glow-strong) lg:inline-flex"
            >
              {navCta.label}
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </MotionConfig>
  )
}

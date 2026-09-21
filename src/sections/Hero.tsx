import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'
import PillButton from '@/components/PillButton'
import ClientStrip from '@/sections/ClientStrip'
import { headlineLines, primaryCta, secondaryCta } from '@/data/hero'
import { useLenisRef } from '@/hooks/useLenisRef'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { heroPhoto } from '@/lib/assets'
import { duration, ease } from '@/lib/motion'

/**
 * Home hero: stacked uppercase headline, photo behind the nav scrim, CTAs and the client strip.
 * Dark section; at least one viewport tall, content-height when it needs more (the strip sits
 * at the bottom either way). Everything here is copy-free: text comes from data/hero.ts.
 *
 * Intro (skipped entirely for reduced motion): headline lines rise out of their wrappers
 * (90ms stagger) → photo fades in and settles → CTAs, then the strip, fade in. Only
 * transforms and opacity animate, so layout never moves.
 */
export default function Hero() {
  const lenisRef = useLenisRef()
  // Not framer's useReducedMotion(): that logs a dev-console warning whenever the OS setting is on.
  const skipIntro = useMediaQuery('(prefers-reduced-motion: reduce)')

  const from = <T,>(state: T) => (skipIntro ? false : state)

  // In-page anchor: smooth-scroll via Lenis if the target exists, otherwise do nothing.
  const onSecondaryClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector<HTMLElement>(secondaryCta.href)
    if (!target) return
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(target)
    else target.scrollIntoView({ block: 'start' })
  }

  return (
    <section
      data-theme="dark"
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-[max(var(--scrim-h),calc(var(--header-h)+clamp(1.5rem,2.2vw,3rem)))] pb-(--section-py)"
    >
      {/* Photo sits behind the nav scrim (the scrim is fixed above the page). Decorative. */}
      <motion.div
        aria-hidden="true"
        className="hero-photo-mask pointer-events-none absolute right-0 bottom-0 z-0 h-[74%] w-[112%] max-w-[38rem] lg:top-0 lg:bottom-(--section-py) lg:h-auto lg:w-[46vw] lg:max-w-none"
        initial={from({ opacity: 0, scale: 1.04 })}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: ease.outExpo, delay: 0.55 }}
      >
        <img
          src={heroPhoto}
          alt=""
          width={1145}
          height={1374}
          fetchPriority="high"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover object-[75%_100%] opacity-50 lg:object-[50%_0%] lg:opacity-100"
        />
      </motion.div>

      <div className="site-container relative z-10 flex flex-1 flex-col">
        <h1 className="type-display">
          {headlineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i % 2 === 0 ? 'text-fg' : 'text-fg-dim'}`}
                initial={from({ y: '110%' })}
                animate={{ y: 0 }}
                transition={{ duration: duration.slower, ease: ease.outExpo, delay: 0.1 + i * 0.09 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-[clamp(2rem,3vw,3.6rem)] mb-[clamp(2.25rem,3.2vw,3.8rem)] flex flex-col items-start gap-6 text-(length:--fs-nav) font-bold tracking-[0.045em] uppercase lg:flex-row lg:items-center lg:gap-[2.9em]"
          initial={from({ opacity: 0, y: 14 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.outExpo, delay: 1.0 }}
        >
          <PillButton to={primaryCta.to} className="max-lg:w-full">
            {primaryCta.label}
          </PillButton>

          <a
            href={secondaryCta.href}
            data-cursor="hover"
            onClick={onSecondaryClick}
            className="whitespace-nowrap text-fg underline decoration-2 underline-offset-[0.67em] transition-[text-underline-offset,opacity] duration-200 hover:underline-offset-[0.9em] hover:opacity-80"
          >
            {secondaryCta.label}
          </a>
        </motion.div>

        <motion.div
          className="mt-auto"
          initial={from({ opacity: 0 })}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: ease.outExpo, delay: 1.2 }}
        >
          <ClientStrip />
        </motion.div>
      </div>
    </section>
  )
}

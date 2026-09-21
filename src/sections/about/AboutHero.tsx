import { motion } from 'framer-motion'
import ArrowIcon from '@/components/ArrowIcon'
import PillButton from '@/components/PillButton'
import SectionLabel from '@/components/SectionLabel'
import { aboutHero } from '@/data/about-page'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { duration, ease } from '@/lib/motion'

/**
 * Longest headline line ("A DESIGN-LED") in em at weight 800 / tracking -.02em: measured 6.64em, plus ~3% safety.
 * The font size is min(--fs-about-hero, container width ÷ this), so the widest line can never be
 * wider than the container. Change the lines in data/about-page.ts → re-check this number
 * (the section also clips horizontally as a last resort, so a page never scrolls sideways).
 */
const LONGEST_LINE_EM = 6.85

/**
 * /about hero (dark). Label, a three-line uppercase headline (white / slate / white) and a solid
 * white pill. Same slide-up intro as the Home hero (lines rise out of their wrappers, 90ms
 * stagger; label and button fade); skipped for reduced motion. Top padding clears the header
 * scrim; the bottom padding is --about-py (120px at 1908).
 */
export default function AboutHero() {
  const skipIntro = useMediaQuery('(prefers-reduced-motion: reduce)')
  const from = <T,>(state: T) => (skipIntro ? false : state)

  return (
    <section
      data-theme="dark"
      aria-labelledby="about-hero-heading"
      className="overflow-x-clip bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+clamp(1.25rem,1.95vw,2.75rem))] pb-(--about-py)"
    >
      <div className="site-container">
        <motion.div
          initial={from({ opacity: 0, y: 14 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.outExpo }}
        >
          <SectionLabel>{aboutHero.label}</SectionLabel>
        </motion.div>

        {/* The query container makes 100cqw = the width the headline may use. */}
        <div className="mt-[clamp(1.5rem,2.3vw,3rem)]" style={{ containerType: 'inline-size' }}>
          <h1
            id="about-hero-heading"
            className="font-extrabold tracking-[-0.02em] uppercase"
            style={{
              fontSize: `min(var(--fs-about-hero), calc(100cqw / ${LONGEST_LINE_EM}))`,
              lineHeight: 0.98,
            }}
          >
            {aboutHero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden whitespace-nowrap">
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
        </div>

        <motion.div
          className="mt-8 lg:mt-[3.3vw]"
          initial={from({ opacity: 0, y: 14 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.outExpo, delay: 0.55 }}
        >
          <PillButton to={aboutHero.cta.to} ring className="gap-[0.85em]">
            {aboutHero.cta.label}
            <ArrowIcon />
          </PillButton>
        </motion.div>
      </div>
    </section>
  )
}

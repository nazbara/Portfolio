import { motion } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import type { ServicePage } from '@/data/service-pages'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { duration, ease } from '@/lib/motion'

/**
 * Average advance of one uppercase glyph at weight 800 with -.05em tracking is ≈.55em ("DESIGN SYSTEMS THAT"
 * measures 10.3em for 19 characters); .62 leaves room for wide letters. The headline's font size is
 * min(--fs-service-hero, container width ÷ (longest line × .62)), so the longest line always fits the
 * container, whatever the copy. The section also clips horizontally as a last resort.
 */
const EM_PER_CHAR = 0.62

/**
 * Service hero (dark): SectionLabel + a three-line uppercase headline, pure white on every line, 145px with
 * a 145px pitch and -.05em tracking (frames service-top-01..03). No button. Same slide-up intro as the
 * other heroes (lines rise out of their wrappers, 90ms stagger), skipped for reduced motion. Top padding
 * clears the header scrim; the bottom padding leaves the hero taller than the first screen, as in the frames.
 */
export default function ServiceHero({ page }: { page: ServicePage }) {
  const skipIntro = useMediaQuery('(prefers-reduced-motion: reduce)')
  const from = <T,>(state: T) => (skipIntro ? false : state)
  const longest = Math.max(...page.hero.lines.map((l) => l.length))

  return (
    <section
      data-theme="dark"
      aria-labelledby="service-hero-heading"
      className="overflow-x-clip bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+clamp(1.25rem,2.85vw,3.5rem))] pb-[clamp(4rem,15vw,18rem)] lg:min-h-[min(100svh,58vw)]"
    >
      <div className="site-container">
        <motion.div
          initial={from({ opacity: 0, y: 14 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease.outExpo }}
        >
          <SectionLabel>{page.hero.label}</SectionLabel>
        </motion.div>

        <div className="mt-6 lg:mt-[2.35vw]" style={{ containerType: 'inline-size' }}>
          <h1
            id="service-hero-heading"
            className="font-extrabold tracking-[-0.05em] text-fg uppercase"
            style={{
              fontSize: `min(var(--fs-service-hero), calc(100cqw / ${(longest * EM_PER_CHAR).toFixed(2)}))`,
              lineHeight: 1,
            }}
          >
            {page.hero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden whitespace-nowrap">
                <motion.span
                  className="block"
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
      </div>
    </section>
  )
}

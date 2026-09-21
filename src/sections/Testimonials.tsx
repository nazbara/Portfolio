import { useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import Reveal from '@/components/Reveal'
import SlideDots from '@/components/SlideDots'
import { testimonials, testimonialsHeading, type Testimonial } from '@/data/testimonials'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { duration, ease } from '@/lib/motion'

const total = testimonials.length

/** "Sample Client A" → "SC": the first letter of the first two words. */
const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

/** Quote + author. Rendered once for the live slide and once per slide (hidden) to size the card. */
function Body({ t }: { t: Testimonial }) {
  return (
    <>
      <blockquote>
        <p className="text-(length:--fs-quote) leading-[1.333] font-normal text-fg-soft italic">
          &ldquo;{t.quote}&rdquo;
        </p>
      </blockquote>
      <div className="mt-8 flex items-center gap-4 lg:mt-[3vw] lg:gap-[1.25vw]">
        <span
          aria-hidden="true"
          className="grid size-14 shrink-0 place-items-center rounded-full bg-[#e7e6eb] text-(length:--fs-initials) font-semibold text-[#48526b] lg:size-[4.4vw] lg:max-h-[6.2rem] lg:max-w-[6.2rem]"
        >
          {initials(t.name)}
        </span>
        <div className="leading-[1.3]">
          <p className="text-(length:--fs-person) font-bold text-fg">{t.name}</p>
          <p className="mt-[0.15em] text-(length:--fs-role) text-fg-muted">{t.role}</p>
        </div>
      </div>
    </>
  )
}

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 8 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -8 }),
}

function ArrowButton({ dir, onClick }: { dir: -1 | 1; onClick: () => void }) {
  const prev = dir === -1
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? 'Previous testimonial' : 'Next testimonial'}
      data-cursor="hover"
      className={`grid size-12 shrink-0 cursor-pointer place-items-center rounded-full bg-paper text-fg-soft shadow-arrow transition-[scale] duration-(--dur-base) ease-(--ease-out-expo) motion-safe:hover:scale-[1.06] lg:absolute lg:top-1/2 lg:size-[72px] lg:-translate-y-1/2 ${
        prev ? 'max-lg:order-first lg:-left-[108px]' : 'max-lg:order-last lg:-right-[108px]'
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 11 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 lg:h-[19px]">
        <path d={prev ? 'M9.5 1.5 1.5 9.5l8 8' : 'M1.5 1.5l8 8-8 8'} />
      </svg>
    </button>
  )
}

/**
 * One large white card on an off-white band (#f5f5f5, sampled). Manual only: arrows, dots,
 * drag / swipe, ArrowLeft / ArrowRight while the region has focus. The card is sized by the tallest
 * quote (every quote is rendered hidden in the same grid cell) and the live one is centred inside
 * it, so nothing jumps; slides crossfade with an 8px slide (350ms, out-quart), or swap instantly
 * under reduced motion. Announces "Testimonial N of M" through a polite live region.
 */
export default function Testimonials() {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [{ index, dir }, setState] = useState({ index: 0, dir: 1 })

  const goTo = (next: number, direction: number) => setState({ index: (next + total) % total, dir: direction })
  const step = (direction: 1 | -1) => goTo(index + direction, direction)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    }
  }

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 60 || Math.abs(info.velocity.x) > 400) step(info.offset.x < 0 ? 1 : -1)
  }

  return (
    <section
      id="testimonials"
      data-theme="light"
      aria-labelledby="testimonials-heading"
      className="bg-paper-soft py-(--section-py)"
    >
      <h2 id="testimonials-heading" className="sr-only">
        {testimonialsHeading}
      </h2>

      <div className="site-container">
        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative mx-auto w-full rounded-(--r-testimonial) outline-offset-4 lg:w-[73.45vw] lg:max-w-[87.5rem]"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragSnapToOrigin
              onDragEnd={onDragEnd}
              className="relative grid cursor-grab rounded-(--r-testimonial) bg-paper px-(--card-gutter-x) py-10 active:cursor-grabbing lg:min-h-[33.9vw] lg:py-[5.65vw]"
            >
              {/* Two tapered, slanted marks (55 × 48px at 1906, 67px from the top and 69px from the right edge). */}
              <svg
                aria-hidden="true"
                viewBox="0 0 56 49"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
                className="pointer-events-none absolute top-4 right-5 h-9 w-auto text-[#e6e6ea] lg:top-[3.5vw] lg:right-[3.6vw] lg:h-[2.5vw]"
              >
                <path d="M6 2.5h19.5l-9 41.5h-5.5Z" />
                <path d="M34.5 2.5H54l-9 41.5h-5.5Z" />
              </svg>

              {/* Hidden copies fix the card to the tallest slide. */}
              {testimonials.map((t) => (
                <div key={t.name} aria-hidden="true" className="pointer-events-none invisible col-start-1 row-start-1 self-center select-none">
                  <Body t={t} />
                </div>
              ))}

              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reduced ? 0 : duration.base + 0.03, ease: ease.outQuart }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}`}
                  className="col-start-1 row-start-1 self-center"
                >
                  <Body t={testimonials[index]} />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Below 1024px the arrows sit either side of the dots; from 1024px they hang outside the card, centred on card + dots. */}
            <div className="mt-6 flex items-center justify-center gap-5 lg:mt-[1.94vw] lg:contents">
              <ArrowButton dir={-1} onClick={() => step(-1)} />
              <SlideDots
                count={total}
                active={index}
                onSelect={(i) => goTo(i, i > index ? 1 : -1)}
                label="Testimonial slides"
                size="round"
                className="lg:mt-[1.94vw]"
              />
              <ArrowButton dir={1} onClick={() => step(1)} />
            </div>

            <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
              Testimonial {index + 1} of {total}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

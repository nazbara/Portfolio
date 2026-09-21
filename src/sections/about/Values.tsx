import Reveal from '@/components/Reveal'
import { values } from '@/data/about-page'

/** Long thin arrow, 75 × 36 at 1908 (stroke 2). */
function LongArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 76 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-14 sm:h-7 sm:w-[4.5rem] lg:h-[1.9vw] lg:w-[3.93vw]"
    >
      <path d="M1 18h72M57 3l16 15-16 15" />
    </svg>
  )
}

/**
 * White section: heading (90px caps), a muted subline, then three full-bleed rows separated by
 * hairlines. A row = bracketed word (172px, tracking -.075em, pale grey) + long arrow + a 45px light
 * description. Hover / focus / touch press: the word and arrow go ink, the row fills #fafafc, the
 * arrow slides 12px and a 2px ink line sweeps left → right along the row's bottom edge
 * (.value-row in globals.css). Phones: word above description, arrow doesn't slide.
 */
export default function Values() {
  return (
    <section data-theme="light" aria-labelledby="values-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <h2
            id="values-heading"
            className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.045em] uppercase"
          >
            {values.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-4 lg:mt-[1.9vw]">
          <p className="text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-quiet">{values.subline}</p>
        </Reveal>
      </div>

      <ul className="mt-10 border-t border-line-soft lg:mt-[5vw]">
        {values.items.map((item, i) => (
          <Reveal key={item.label} as="li" delay={i * 0.06} className="border-b border-line-soft">
            <div tabIndex={0} role="group" aria-label={item.label} data-cursor="hover" className="value-row block">
              <div className="site-container grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-6 py-10 lg:grid-cols-[47.85%_minmax(0,1fr)_38.44%] lg:gap-x-0 lg:py-[6.2vw]">
                <span
                  aria-hidden="true"
                  className="value-row__word text-(length:--fs-value-word) leading-none font-bold tracking-[-0.075em] whitespace-nowrap"
                >
                  {item.word}
                </span>
                <span aria-hidden="true" className="value-row__arrow relative z-10 shrink-0 lg:justify-self-start">
                  <LongArrow />
                </span>
                <p
                  className="text-(length:--fs-lead-xl) leading-[1.2] font-light text-fg-soft max-lg:col-span-2 max-lg:row-start-2"
                >
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

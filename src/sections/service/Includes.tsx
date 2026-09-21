import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { ServicePage } from '@/data/service-pages'

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[34%]">
      <path d="M2 7.5 7 12.5 18 1.5" />
    </svg>
  )
}

/**
 * Dark section. Header: label, a 90px uppercase heading on the left and a 30px muted intro starting at 44%
 * of the width on the right. Then a FIXED asymmetric grid of dark rounded cards (measured 1046 : 687 in the
 * first row and 688 : 1044 in the second, gap 32, 205px tall, radius 22, padding 73): 1.52fr / 1fr, then
 * 1fr / 1.52fr, so the widths never depend on the text — and never change on hover. Each card is a
 * rounded-square check badge + the text. Hover / keyboard focus / touch press: background brightens, text
 * goes white, badge brightens (.include-card in globals.css). Phones: one column.
 */
export default function Includes({ page }: { page: ServicePage }) {
  const { includes } = page
  const rows = Array.from({ length: Math.ceil(includes.items.length / 2) }, (_, r) => includes.items.slice(r * 2, r * 2 + 2))

  return (
    <section data-theme="dark" aria-labelledby="includes-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel>{includes.label}</SectionLabel>
        </Reveal>

        <div className="mt-6 grid gap-y-6 lg:mt-[2.4vw] lg:grid-cols-[minmax(0,1fr)_55.6%] lg:items-start">
          <Reveal delay={0.08}>
            <h2
              id="includes-heading"
              className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.04em] uppercase"
            >
              {includes.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="lg:pt-[0.3vw]">
            <p className="max-w-[28em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-muted">{includes.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-10 space-y-5 lg:mt-[5.2vw] lg:space-y-[1.65vw]">
          {rows.map((row, r) => (
            <li key={r}>
              <ul className={`grid gap-5 lg:gap-x-[1.65vw] ${r % 2 === 0 ? 'lg:grid-cols-[1.523fr_1fr]' : 'lg:grid-cols-[1fr_1.522fr]'}`}>
                {row.map((text, c) => (
                  <Reveal key={text} as="li" delay={(r * 2 + c) * 0.08}>
                    <div
                      tabIndex={0}
                      data-cursor="hover"
                      className="include-card flex h-full items-start gap-4 rounded-(--r-media) border border-(--include-line) p-6 lg:gap-[1.7vw] lg:p-(--card-pad-lg)"
                    >
                      <span
                        aria-hidden="true"
                        className="include-card__badge grid size-11 shrink-0 place-items-center rounded-[23%] text-white lg:size-[3.14vw] lg:max-h-[4.5rem] lg:max-w-[4.5rem]"
                      >
                        <CheckIcon />
                      </span>
                      <p className="include-card__text text-(length:--fs-lead-sm) leading-[1.5] font-light">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

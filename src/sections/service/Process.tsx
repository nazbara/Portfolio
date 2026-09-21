import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { ServicePage } from '@/data/service-pages'

/**
 * White section. Header: label, a 90px uppercase heading on the left and a 30px muted intro starting at 44%
 * on the right. Then four equal white cards (414 × 315, gap 36, radius 28, soft shadow): an 84px black
 * rounded number badge (01–04), a 72 × 2px grey hairline and the step title (27.5px, grey-700). Hover / press:
 * the card lifts 6px and its shadow deepens (.process-card in globals.css). Phones: one column; tablets: two.
 */
export default function Process({ page }: { page: ServicePage }) {
  const { process } = page

  return (
    <section data-theme="light" aria-labelledby="process-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel>{process.label}</SectionLabel>
        </Reveal>

        <div className="mt-6 grid gap-y-6 lg:mt-[1.6vw] lg:grid-cols-[minmax(0,1fr)_55.6%] lg:items-start">
          <Reveal delay={0.08}>
            <h2
              id="process-heading"
              className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.045em] uppercase"
            >
              {process.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="lg:pt-[0.3vw]">
            <p className="max-w-[28em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-quiet">{process.intro}</p>
          </Reveal>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-[4.6vw] lg:grid-cols-4 lg:gap-[1.9vw]">
          {process.steps.map((step, i) => (
            <Reveal key={step} as="li" delay={i * 0.08}>
              <div className="process-card h-full rounded-(--r-step) bg-paper p-6 lg:p-[2.2vw]">
                <span
                  aria-hidden="true"
                  className="grid size-16 place-items-center rounded-[26%] bg-ink text-(length:--fs-step-num) font-bold text-paper lg:size-[4.4vw]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="mt-6 block h-[2px] w-[72px] bg-[#e3e3e3] lg:mt-[1.6vw] lg:w-[3.77vw]" />
                <h3 className="mt-6 text-(length:--fs-check-title) leading-[1.5] font-normal tracking-normal text-grey-700 lg:mt-[1.6vw]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step}
                </h3>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { WorkDetailPage } from '@/data/work-detail'
import Statement from './Statement'

/**
 * Dark section. Eyebrow + a segmented statement (same treatment as Challenge.tsx), then a stat row
 * of 2 big-number cards, then 2 more cards with a category label, sub-heading and description — all
 * on the --include-bg/--include-line surface already used for dark cards elsewhere on the site.
 */
export default function Results({ page }: { page: WorkDetailPage }) {
  const { results } = page

  return (
    <section data-theme="dark" aria-labelledby="results-label" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel bright>
            <span id="results-label">{results.label}</span>
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-[54rem] lg:mt-[2.5vw]">
          <Statement segments={results.statement} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[4vw] lg:gap-[1.9vw]">
          {results.stats.map((stat) => (
            <Reveal key={stat.label} delay={0.2}>
              <div className="h-full rounded-2xl border border-(--include-line) bg-(--include-bg) p-8 lg:p-[2.6vw]">
                <span aria-hidden="true" className="block text-(length:--fs-statement) leading-none font-bold text-fg">
                  {stat.value}
                </span>
                <p className="mt-4 text-(length:--fs-lead-sm) leading-[1.4] font-light text-fg-muted lg:mt-[1vw]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-[1.67vw] lg:gap-[1.9vw]">
          {results.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.32 + i * 0.08}>
              <div className="h-full rounded-2xl border border-(--include-line) bg-(--include-bg) p-8 lg:p-[2.6vw]">
                <p className="text-(length:--fs-card-label) font-bold tracking-[0.1em] text-fg-muted uppercase">{card.label}</p>
                <h3 className="mt-3 text-(length:--fs-row-title) leading-[1.2] font-bold tracking-[-0.02em] text-fg lg:mt-[1vw]">
                  {card.title}
                </h3>
                <p className="mt-4 text-(length:--fs-lead-sm) leading-[1.5] font-light text-fg-muted lg:mt-[1vw]">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { WorkDetailPage } from '@/data/work-detail'

/**
 * Light section. Header: label, heading on the left, intro starting at 55.6% on the right (the same
 * grid the service pages' Includes.tsx / Process.tsx use). Below: exactly 2 flat white cards — a
 * large muted number, a bold title and a lighter description — no number badge, unlike Process.tsx.
 */
export default function Approach({ page }: { page: WorkDetailPage }) {
  const { approach } = page

  return (
    <section data-theme="light" aria-labelledby="work-approach-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel>{approach.label}</SectionLabel>
        </Reveal>

        <div className="mt-6 grid gap-y-6 lg:mt-[2.4vw] lg:grid-cols-[minmax(0,1fr)_55.6%] lg:items-start">
          <Reveal delay={0.08}>
            <h2
              id="work-approach-heading"
              className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.04em] uppercase"
            >
              {approach.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="lg:pt-[0.3vw]">
            <p className="max-w-[28em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-muted">{approach.intro}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[4vw] lg:gap-[1.9vw]">
          {approach.cards.map((card, i) => (
            <Reveal key={card.number} delay={0.24 + i * 0.08}>
              <div className="h-full rounded-2xl bg-paper p-8 shadow-card lg:p-[2.6vw]">
                <span aria-hidden="true" className="block text-(length:--fs-statement) leading-none font-bold text-grey-200">
                  {card.number}
                </span>
                <h3 className="mt-6 text-(length:--fs-row-title) leading-[1.2] font-bold tracking-[-0.02em] text-ink lg:mt-[1.4vw]">
                  {card.title}
                </h3>
                <p className="mt-4 text-(length:--fs-lead-sm) leading-[1.5] font-light text-fg-quiet lg:mt-[1vw]">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

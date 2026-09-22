import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { WorkDetailPage } from '@/data/work-detail'
import Statement from './Statement'

/** Dark section, continues the hero's background. Eyebrow + one big segmented statement. */
export default function Challenge({ page }: { page: WorkDetailPage }) {
  return (
    <section data-theme="dark" aria-labelledby="challenge-label" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel bright>
            <span id="challenge-label">{page.challenge.label}</span>
          </SectionLabel>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-[54rem] lg:mt-[2.5vw]">
          <Statement segments={page.challenge.statement} />
        </Reveal>
      </div>
    </section>
  )
}

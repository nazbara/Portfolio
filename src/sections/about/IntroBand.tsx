import Reveal from '@/components/Reveal'
import { introBand } from '@/data/about-page'

/**
 * Warm off-white band (#f7f6f2, sampled) with hard edges. Two columns: a large light lead
 * (48px / 66px, weight 300) and a narrow column with a 1px hairline on its left and a 28px
 * paragraph vertically centred against the lead. 120px above and below (--about-py).
 */
export default function IntroBand() {
  return (
    <section data-theme="light" aria-label="Introduction" className="bg-paper-warm py-(--about-py)">
      <div className="site-container grid gap-y-10 lg:grid-cols-[minmax(0,1fr)_31.7%] lg:gap-x-[3.8vw]">
        <Reveal>
          <p className="text-(length:--fs-intro) leading-[1.375] font-light text-fg-soft">{introBand.lead}</p>
        </Reveal>

        <Reveal delay={0.12} className="flex items-center lg:border-l lg:border-[#d9d8d4] lg:pl-[3.9vw]">
          <p className="text-(length:--fs-lead-sm) leading-[1.5] font-normal text-fg-quiet">{introBand.side}</p>
        </Reveal>
      </div>
    </section>
  )
}

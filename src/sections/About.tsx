import PillButton from '@/components/PillButton'
import Reveal from '@/components/Reveal'
import { about } from '@/data/about'

/**
 * Light section on plain white — hard edges against the hero above and Services below.
 * Layout measured from the reference at 1916px: label with a 2px underline, then a two-column
 * block (heading left at 90px / pitch 90, paragraphs right in a 810px column at 36px light /
 * pitch 48). Reveals run label → heading → paragraphs → button with an 80ms stagger.
 */
export default function About() {
  return (
    <section data-theme="light" aria-labelledby="about-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <p className="text-(length:--fs-label) leading-[1.85] font-semibold tracking-[0.1em] uppercase">
            <span className="inline-block border-b-2 border-current pb-[0.31em]">{about.label}</span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-y-10 lg:mt-[5.7vw] lg:grid-cols-[minmax(0,1fr)_45.9%] lg:items-start">
          <div>
            <Reveal delay={0.08}>
              <h2
                id="about-heading"
                className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.04em] text-wrap lg:max-w-[41vw]"
              >
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.32} className="mt-10 lg:mt-[3.8vw]">
              <PillButton variant="outline" to={about.button.to}>
                {about.button.label}
              </PillButton>
            </Reveal>
          </div>

          <div className="space-y-[1.333em] text-(length:--fs-lead-lg) leading-[1.333] font-light text-fg-soft">
            {about.paragraphs.map((text, i) => (
              <Reveal key={text} delay={0.16 + i * 0.08}>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

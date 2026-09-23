import ArrowIcon from '@/components/ArrowIcon'
import PillButton from '@/components/PillButton'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import type { ServicePage } from '@/data/service-pages'
import { getServiceImage } from '@/lib/media'

/**
 * White section, two columns. Left: a large picture (src/assets/services/<slug>-approach.webp, else the
 * light placeholder panel), shown whole (object-contain, never cropped) and nudged 2vw further left,
 * anchored 30% from the left edge and centred vertically so every subject sits the same way regardless
 * of its own crop. Fills the left half of the section from its top padding down to the bottom edge and
 * out to the viewport's left edge. Right (starts at 50% of the container): label, two 36px light
 * paragraphs (48px pitch, one blank line between) and a solid ink pill with an arrow. Phones stack, picture first.
 */
export default function Approach({ page }: { page: ServicePage }) {
  const image = getServiceImage(`${page.slug}-approach`)
  // ml-systems sits a little low against its default vertical centre — nudge it up.
  const objectPosition = page.slug === 'ml-systems' ? 'object-[30%_10%]' : 'object-[30%_50%]'

  return (
    <section
      data-theme="light"
      aria-labelledby="approach-label"
      className="relative overflow-hidden bg-canvas pt-(--section-py-lg) max-lg:pt-0"
    >
      {/* Picture slot: absolutely placed on desktop so it can run to the left and bottom edges. */}
      <div className="relative aspect-[4/3] w-full overflow-hidden lg:absolute lg:top-(--section-py-lg) lg:bottom-0 lg:left-0 lg:aspect-auto lg:w-1/2">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`size-full max-w-none object-contain ${objectPosition} lg:-ml-[2vw] lg:w-[calc(100%+2vw)]`}
          />
        ) : (
          <PlaceholderArt variant="light" />
        )}
      </div>

      <div className="site-container grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pb-(--section-py-lg)">
          <div className="max-lg:py-12">
            <Reveal>
              <SectionLabel>
                <span id="approach-label">{page.approach.label}</span>
              </SectionLabel>
            </Reveal>

            <div className="mt-6 space-y-[1.333em] text-(length:--fs-lead-lg) leading-[1.333] font-light text-ink-slate lg:mt-[2.4vw]">
              {page.approach.paragraphs.map((text, i) => (
                <Reveal key={text} delay={0.08 + i * 0.08}>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-8 lg:mt-[3vw]">
              <PillButton to={page.approach.cta.to} ring className="gap-[0.85em]">
                {page.approach.cta.label}
                <ArrowIcon />
              </PillButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

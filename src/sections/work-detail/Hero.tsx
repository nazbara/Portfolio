import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import type { WorkDetailPage } from '@/data/work-detail'
import { getWorkImage } from '@/lib/media'

/**
 * Dark hero: categories eyebrow, a 4-line heading (each line its own block, alternating
 * text-fg / text-fg-dim like Hero.tsx's headline), a bullet + client name, and the project's own
 * grid/carousel image (getWorkImage) in a rounded panel on the right. Stacks on mobile, image first
 * on desktop is skipped — text stays left, image right, full-width stack below on phones.
 */
export default function Hero({ page }: { page: WorkDetailPage }) {
  const image = getWorkImage(page.slug)

  return (
    <section
      data-theme="dark"
      aria-labelledby="work-hero-heading"
      className="overflow-x-clip bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+clamp(1.25rem,2.85vw,3.5rem))] pb-[clamp(3rem,8vw,7rem)]"
    >
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-[3.5vw]">
        <div>
          <Reveal>
            <p className="text-(length:--fs-eyebrow) font-bold tracking-[0.195em] text-fg-label uppercase">
              {page.hero.categories.join(' · ')}
            </p>
          </Reveal>

          <h1 id="work-hero-heading" className="mt-6 text-(length:--fs-service-hero) leading-[1] font-extrabold tracking-[-0.05em] uppercase lg:mt-[1.6vw]">
            {page.hero.headingLines.map((line, i) => (
              <Reveal key={line} as="span" delay={0.08 + i * 0.08} className={`block ${i % 2 === 0 ? 'text-fg' : 'text-fg-dim'}`}>
                {line}
              </Reveal>
            ))}
          </h1>

          <Reveal delay={0.5} className="mt-6 flex items-center gap-3 lg:mt-[1.8vw]">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-fg-dim" />
            <p className="text-(length:--fs-eyebrow) font-bold tracking-[0.14em] text-fg-muted uppercase">{page.hero.client}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-(--r-media) lg:aspect-[5/4]">
            {image ? (
              <img
                src={image}
                alt=""
                loading="eager"
                decoding="async"
                draggable={false}
                className="size-full object-cover select-none"
              />
            ) : (
              <PlaceholderArt />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

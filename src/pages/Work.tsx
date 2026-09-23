import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PillButton from '@/components/PillButton'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import { workItems, type WorkItem } from '@/data/work'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { getWorkImage } from '@/lib/media'

/**
 * Grid card: full-bleed image, dark gradient overlay, categories + title + "View project" bottom-left.
 * The image defaults to grayscale and turns to color on hover/focus (its own group only — sibling
 * cards are untouched, since Tailwind's group-hover only matches descendants of the hovered
 * element). The whole card links to the project's own case-study page.
 */
function GridCard({ item, index }: { item: WorkItem; index: number }) {
  const image = getWorkImage(item.slug)

  return (
    <Link
      to={`/work/${item.slug}`}
      data-cursor="view"
      data-cursor-label="View"
      draggable={false}
      className="group relative isolate block aspect-[4/5] overflow-hidden rounded-(--r-media) bg-grey-900 text-paper"
    >
      <div className="absolute inset-0 transition-transform duration-(--dur-slow) ease-(--ease-out-quart) motion-safe:group-hover:scale-[1.04]">
        {image ? (
          <img
            src={image}
            alt=""
            draggable={false}
            loading="lazy"
            decoding="async"
            className="size-full grayscale object-cover transition-[filter] duration-500 ease-out select-none group-hover:grayscale-0 group-focus-visible:grayscale-0"
          />
        ) : (
          <PlaceholderArt mark={String(index + 1).padStart(2, '0')} />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgb(0 0 0 / 0.85) 0%, rgb(0 0 0 / 0.55) 30%, transparent 62%), linear-gradient(to bottom, rgb(0 0 0 / 0.18), transparent 25%)',
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-[clamp(1.25rem,2.5vw,3rem)]">
        <p className="text-(length:--fs-card-label) leading-[1.3] font-bold tracking-[0.1em] text-white/90 uppercase">
          {item.categories.join(', ')}
        </p>
        <h3 className="mt-1 text-(length:--fs-card-title) leading-[1.15] font-bold tracking-[-0.03em] text-balance">
          {item.title}
        </h3>
        <p className="mt-3 flex items-center gap-[0.4em] text-(length:--fs-work-more) leading-[1.3] font-semibold tracking-[0.02em] text-white/85 uppercase">
          View project
          <span aria-hidden="true" className="transition-transform duration-(--dur-base) ease-(--ease-standard) group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  )
}

/**
 * /work — dark hero (label + two-line heading + subtext) over a light section: a filter pill row
 * ("All" + every category found in the data, derived on the fly) with a live project count, then
 * a 3/2/1-column grid of GridCards, each linking to its own /work/:slug case-study page.
 */
export default function Work() {
  useDocumentTitle('Work | Nezbara')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const set = new Set<string>()
    workItems.forEach((item) => item.categories.forEach((category) => set.add(category)))
    return Array.from(set)
  }, [])

  const filtered = useMemo(
    () => (activeCategory === 'All' ? workItems : workItems.filter((item) => item.categories.includes(activeCategory))),
    [activeCategory],
  )

  return (
    <>
      <section
        data-theme="dark"
        className="overflow-x-clip bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+clamp(1.25rem,2.85vw,3.5rem))] pb-[clamp(3rem,8vw,7rem)]"
      >
        <div className="site-container">
          <Reveal>
            <SectionLabel bright>Work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 lg:mt-[2.35vw]">
            <h1 className="text-(length:--fs-service-hero) leading-[1] font-extrabold tracking-[-0.05em] text-fg uppercase">
              <span className="block">Work</span>
              <span className="block">We're Proud Of.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="mt-6 max-w-2xl lg:mt-[1.6vw]">
            <p className="text-(length:--fs-lead) text-fg-dim">
              A selection of products, platforms and sites we've helped design, build and ship for founders and
              teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-theme="light" className="bg-canvas py-(--section-py-lg)">
        <div className="site-container">
          <Reveal className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <div className="flex flex-wrap gap-3">
              {['All', ...categories].map((category) => (
                <PillButton
                  key={category}
                  variant={activeCategory === category ? 'solid' : 'outline'}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className="h-[2.6em]! px-[1.5em]! text-(length:--fs-tag)!"
                >
                  {category}
                </PillButton>
              ))}
            </div>
            <p className="text-(length:--fs-body) font-semibold text-fg-muted">
              {filtered.length} {filtered.length === 1 ? 'Project' : 'Projects'}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[3.5vw] lg:grid-cols-3 lg:gap-[1.67vw]">
            {filtered.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i, 5) * 0.06}>
                <GridCard item={item} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

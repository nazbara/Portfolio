import { useState } from 'react'
import { Link } from 'react-router-dom'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper/types'
import ArrowIcon from '@/components/ArrowIcon'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SlideDots from '@/components/SlideDots'
import { workItems, type WorkItem } from '@/data/work'
import { serviceCommon } from '@/data/service-pages'
import { getWorkImage } from '@/lib/media'

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const image = getWorkImage(item.slug)

  return (
    <Link
      to={`/work/${item.slug}`}
      data-cursor="view"
      data-cursor-label="View"
      draggable={false}
      className="group block h-full overflow-hidden rounded-(--r-panel) border border-(--work-card-line) bg-(--work-card-bg) text-paper"
    >
      <div className="relative isolate aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-(--dur-slow) ease-(--ease-out-quart) motion-safe:group-hover:scale-[1.03]">
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
      </div>

      <div className="p-6 lg:px-[2.5vw] lg:pt-[2.6vw] lg:pb-[2.6vw]">
        <h3 className="text-(length:--fs-card-title) leading-[1.15] font-bold tracking-[-0.03em]">{item.title}</h3>
        <p className="mt-3 text-(length:--fs-work-cat) leading-[1.4] uppercase lg:mt-[1.05vw]">{item.categories.join(' · ')}</p>
        <p className="mt-3 flex items-center gap-[0.55em] text-(length:--fs-work-more) leading-[1.3] font-semibold lg:mt-[0.6vw]">
          Read more
          <ArrowIcon className="h-[0.9em] w-[1.1em] transition-transform duration-(--dur-base) ease-(--ease-standard) group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  )
}

function ArrowButton({ dir, disabled, onClick }: { dir: -1 | 1; disabled: boolean; onClick: () => void }) {
  const prev = dir === -1
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? 'Previous projects' : 'Next projects'}
      aria-disabled={disabled || undefined}
      data-cursor="hover"
      className={`absolute top-[46%] z-10 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/10 bg-[rgb(20_20_20/0.72)] text-paper backdrop-blur-sm transition-[opacity,scale] duration-(--dur-base) ease-(--ease-out-expo) motion-safe:hover:scale-[1.06] aria-disabled:cursor-default aria-disabled:opacity-35 lg:size-[clamp(3.5rem,4.09vw,4.9rem)] ${
        prev ? 'left-2 lg:left-0 lg:-translate-x-1/2' : 'right-2 lg:right-0 lg:translate-x-1/2'
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 11 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 lg:h-5">
        <path d={prev ? 'M9.5 1.5 1.5 9.5l8 8' : 'M1.5 1.5l8 8-8 8'} />
      </svg>
    </button>
  )
}

/**
 * Dark section: heading + a Swiper of the first six projects (3 per view from 1024px with a 48px gap, one
 * per view with a peek below — 8% on phones, 16% from 480px), each a dark card (image 4:3, title, categories, "Read more →") linking to
 * /work/:slug. Translucent round prev/next buttons sit over the left and right edges of the track; the dots
 * below are the shared pill dots. Cursor turns into the "View" bubble over the cards, like on Home.
 */
export default function RelatedWork() {
  const items = workItems.slice(0, 6)
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(items.length)

  return (
    <section data-theme="dark" aria-labelledby="related-work-heading" className="overflow-x-clip bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <h2
            id="related-work-heading"
            className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.04em] uppercase"
          >
            {serviceCommon.relatedWorkHeading}
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 lg:mt-[4.4vw]">
          <div className="relative">
            <Swiper
              modules={[A11y, Keyboard]}
              slidesPerView={1.08}
              spaceBetween={16}
              breakpoints={{
                480: { slidesPerView: 1.16, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: '2.72%' },
              }}
              grabCursor
              keyboard={{ enabled: true, onlyInViewport: true }}
              a11y={{ containerMessage: 'Related work', slideLabelMessage: 'Project {{index}} of {{slidesLength}}' }}
              onSwiper={(s) => {
                setSwiper(s)
                setCount(s.snapGrid.length)
              }}
              onSnapIndexChange={(s) => setActive(s.snapIndex)}
              onSnapGridLengthChange={(s) => setCount(s.snapGrid.length)}
              className="max-lg:overflow-visible"
            >
              {items.map((item, i) => (
                <SwiperSlide key={item.slug} className="h-auto!">
                  <WorkCard item={item} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowButton dir={-1} disabled={active === 0} onClick={() => swiper?.slidePrev()} />
            <ArrowButton dir={1} disabled={active >= count - 1} onClick={() => swiper?.slideNext()} />
          </div>

          <SlideDots
            count={count}
            active={active}
            onSelect={(i) => swiper?.slideTo(i)}
            label="Related work slides"
            size="insights"
            className="mt-8 lg:mt-[3.4vw]"
          />
        </Reveal>
      </div>
    </section>
  )
}

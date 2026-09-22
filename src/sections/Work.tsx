import { useState } from 'react'
import { Link } from 'react-router-dom'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper/types'
import PillButton from '@/components/PillButton'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SlideDots from '@/components/SlideDots'
import { workCta, workHeading, workItems, type WorkItem } from '@/data/work'
import { getWorkImage } from '@/lib/media'

/**
 * Card: full-bleed image (or generated art), a bottom-up dark gradient for the title, categories
 * top-left, title bottom-left. Hover scales the image ~1.04 over 600ms and turns the cursor into
 * the "View" bubble; reduced motion skips the scale. The whole card is the link.
 * Gradient stops were fitted to the reference's luminance falloff (≈.72 dark 13% up from the
 * bottom, ≈.2 at mid-height) plus a faint top wash so the labels stay legible on pale images.
 */
function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const image = getWorkImage(item.slug)

  const content = (
    <>
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

      <div className="absolute inset-0 flex flex-col justify-between p-[clamp(1.25rem,2.5vw,3rem)]">
        <p className="text-(length:--fs-card-label) leading-[1.3] font-bold tracking-[0.1em] text-white/90 uppercase">
          {item.categories.join(', ')}
        </p>
        <h3 className="text-(length:--fs-card-title) leading-[1.15] font-bold tracking-[-0.03em] text-balance">
          {item.title}
        </h3>
      </div>
    </>
  )

  return (
    <Link
      to={`/work/${item.slug}`}
      data-cursor="view"
      data-cursor-label="View"
      draggable={false}
      className="group relative isolate block size-full overflow-hidden rounded-(--r-media) bg-grey-900 text-paper"
    >
      {content}
    </Link>
  )
}

/**
 * Light section, hard edges. Header row (heading left, outline pill right) over a Swiper of
 * cards: two fill the container (each (container − gap) / 2, measured 858 × 536 = 16:10, gap 48)
 * and the third peeks off the right edge, as in the reference. The slider's left edge sits on the
 * page gutter, so the section clips horizontally instead of the slider. Phones show one card
 * (82% wide, 4:5) with the next peeking. Pagination is our own (`SlideDots`), driven by Swiper's
 * snap index — `snapGrid.length` is the number of reachable positions, which can be fewer than slides.
 */
export default function Work() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(workItems.length)

  return (
    <section
      id="work"
      data-theme="light"
      aria-labelledby="work-heading"
      className="overflow-x-clip bg-canvas py-(--section-py-lg)"
    >
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <Reveal>
            <h2
              id="work-heading"
              className="text-(length:--fs-section-title) leading-none font-bold tracking-[-0.04em] text-wrap"
            >
              {workHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <PillButton variant="outline" to={workCta.to}>
              {workCta.label}
            </PillButton>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-10 lg:mt-[3.75vw]">
          {/* 2.72% of the track = 48px at 1764; the slide widths below use the same number. */}
          <Swiper
            modules={[A11y, Keyboard]}
            slidesPerView="auto"
            spaceBetween={16}
            breakpoints={{ 768: { spaceBetween: '2.72%' } }}
            freeMode={false}
            grabCursor
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ containerMessage: 'Our work', slideLabelMessage: 'Project {{index}} of {{slidesLength}}' }}
            onSwiper={(s) => {
              setSwiper(s)
              setCount(s.snapGrid.length)
            }}
            onSnapIndexChange={(s) => setActive(s.snapIndex)}
            onSnapGridLengthChange={(s) => setCount(s.snapGrid.length)}
            className="overflow-visible!"
          >
            {workItems.map((item, i) => (
              <SwiperSlide
                key={item.slug}
                className="aspect-[4/5] w-[82%]! md:aspect-[16/10] md:w-[calc((100%-2.72%)/2)]!"
              >
                <WorkCard item={item} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <SlideDots
          count={count}
          active={active}
          onSelect={(i) => swiper?.slideTo(i)}
          label="Work slides"
          className="mt-8 lg:mt-[3.13vw] lg:mb-[0.4vw]"
        />
      </div>
    </section>
  )
}

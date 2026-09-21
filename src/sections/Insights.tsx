import { useState } from 'react'
import { Link } from 'react-router-dom'
import { A11y, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper/types'
import PillButton from '@/components/PillButton'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SlideDots from '@/components/SlideDots'
import { insightPosts, insightsCta, insightsHeading, insightsIntro, type InsightPost } from '@/data/insights'
import { getInsightImage } from '@/lib/media'

/**
 * Article card, always inside a Swiper slide. Image is 4:3 (the reference measures 556 × 417; the brief said 16:10), rounded
 * like the Work cards. Hover scales the image ~1.03, underlines the title and grows the cursor;
 * reduced motion skips the scale. Meta reads "CATEGORY • N MIN READ".
 */
function InsightCard({ post, index }: { post: InsightPost; index: number }) {
  const image = getInsightImage(post.slug)

  return (
    <article className="h-full">
      <Link
        to={`/insights/${post.slug}`}
        data-cursor="hover"
        draggable={false}
        className="group block h-full"
      >
        <div className="relative isolate aspect-[4/3] overflow-hidden rounded-(--r-media) bg-grey-900">
          <div className="absolute inset-0 transition-transform duration-(--dur-slow) ease-(--ease-out-quart) motion-safe:group-hover:scale-[1.03]">
            {image ? (
              <img
                src={image}
                alt=""
                draggable={false}
                loading="lazy"
                decoding="async"
                className="size-full object-cover select-none"
              />
            ) : (
              <PlaceholderArt mark={String(index + 1).padStart(2, '0')} />
            )}
          </div>
        </div>

        <p className="mt-5 text-(length:--fs-post-meta) leading-[1.4] font-semibold tracking-[0.15em] text-fg-dim uppercase lg:mt-[1.9vw]">
          {post.category}
          <span aria-hidden="true" className="mx-[0.7em]">
            •
          </span>
          {post.minutes} min read
          <time dateTime={post.date} className="sr-only">
            , published {post.date}
          </time>
        </p>

        <h3 className="mt-3 text-(length:--fs-post-title) leading-[1.333] font-bold tracking-[-0.025em] decoration-[0.06em] underline-offset-[0.14em] text-balance group-hover:underline lg:mt-[0.95vw]">
          {post.title}
        </h3>

        <p className="mt-3 text-(length:--fs-row-desc) leading-[1.5] font-medium text-fg-muted lg:mt-[0.95vw]">
          {post.excerpt}
        </p>
      </Link>
    </article>
  )
}

/**
 * One Swiper at every width (the reference is a carousel on desktop too): 3 per view from 1024px
 * (each (track − 2 gaps) / 3, gap 2.72% ≈ 48px — measured 556px cards on a 1764px track), one
 * per view below, with the next card peeking a little from 480px. Dots are always shown; on
 * desktop the track is clipped at the container so no 4th card leaks into the gutter, on phones
 * it stays open so the peek reaches the screen edge. Bullets = reachable snap positions, so 6 posts
 * at 3 per view give 4 dots.
 */
function InsightsCarousel() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(insightPosts.length)

  return (
    <>
      <Swiper
        modules={[A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 1.16, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: '2.72%' },
        }}
        grabCursor
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ containerMessage: 'Insights', slideLabelMessage: 'Article {{index}} of {{slidesLength}}' }}
        onSwiper={(s) => {
          setSwiper(s)
          setCount(s.snapGrid.length)
        }}
        onSnapIndexChange={(s) => setActive(s.snapIndex)}
        onSnapGridLengthChange={(s) => setCount(s.snapGrid.length)}
        className="max-lg:overflow-visible"
      >
        {insightPosts.map((post, i) => (
          <SwiperSlide key={post.slug} className="h-auto!">
            <InsightCard post={post} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideDots
        count={count}
        active={active}
        onSelect={(i) => swiper?.slideTo(i)}
        label="Insights slides"
        size="insights"
        className="mt-8 lg:mt-[4.6vw]"
      />
    </>
  )
}

/** Dark section, hard edge from Work. Header: heading + muted intro left, outline pill bottom-right. */
export default function Insights() {
  return (
    <section
      id="insights"
      data-theme="dark"
      aria-labelledby="insights-heading"
      className="overflow-x-clip bg-canvas py-(--section-py-lg)"
    >
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <div className="max-w-[56%] max-lg:max-w-none">
            <Reveal>
              <h2
                id="insights-heading"
                className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.04em] text-wrap"
              >
                {insightsHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-4 lg:mt-6">
              <p className="text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-muted">{insightsIntro}</p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <PillButton variant="outline" to={insightsCta.to}>
              {insightsCta.label}
            </PillButton>
          </Reveal>
        </div>

        <Reveal delay={0.24} className="mt-10 lg:mt-[5vw]">
          <InsightsCarousel />
        </Reveal>
      </div>
    </section>
  )
}

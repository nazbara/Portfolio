import { Link } from 'react-router-dom'
import ArrowIcon from '@/components/ArrowIcon'
import Reveal from '@/components/Reveal'
import { insightPosts } from '@/data/insights'
import { serviceCommon } from '@/data/service-pages'

/**
 * Light-grey (#f5f5f5) section: heading, then the first three articles as three equal columns (588 wide
 * each at 1908) separated by 1px vertical hairlines and padded 48px. No images. Each column is one link: an
 * uppercase keyword line (18px, tracking .115em, muted), a 30px semibold title and an arrow below it.
 * Hover: the title underlines and the arrow moves right. Phones: stacked with horizontal hairlines.
 */
export default function RelatedInsights() {
  const posts = insightPosts.slice(0, 3)

  return (
    <section data-theme="light" aria-labelledby="related-articles-heading" className="bg-paper-soft py-[clamp(4rem,7vw,9rem)]">
      <div className="site-container">
        <Reveal>
          <h2
            id="related-articles-heading"
            className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.045em] uppercase"
          >
            {serviceCommon.relatedArticlesHeading}
          </h2>
        </Reveal>

        <ul className="mt-10 grid lg:mt-[4vw] lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal
              key={post.slug}
              as="li"
              delay={i * 0.08}
              className={`border-(--sep-article) max-lg:border-t max-lg:first:border-t-0 lg:border-l lg:first:border-l-0`}
            >
              <Link
                to={`/insights/${post.slug}`}
                data-cursor="hover"
                className="group flex h-full flex-col px-0 py-8 lg:p-[2.5vw]"
              >
                <p className="text-(length:--fs-eyebrow) leading-[1.33] font-medium tracking-[0.115em] text-fg-quiet uppercase">
                  {post.tags.join(', ')}
                </p>
                <h3 className="mt-5 text-(length:--fs-article-title) leading-[1.4] font-semibold tracking-normal decoration-[0.06em] underline-offset-[0.14em] group-hover:underline lg:mt-[1.8vw]">
                  {post.title}
                </h3>
                <ArrowIcon className="mt-8 h-5 w-[26px] transition-transform duration-(--dur-base) ease-(--ease-standard) group-hover:translate-x-2 lg:mt-[2.9vw]" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { companyLinks, phoneHref, privacyHref, site } from '@/data/site'
import { serviceGroups, serviceHref } from '@/data/services'
import CapybaraWind from '@/components/CapybaraWind'
import { logoWordmark } from '@/lib/assets'

/** Ink box of logo-wordmark.webp inside its 2172×724 canvas (alpha > 40), so the crop can be exact. */
const WORDMARK = { w: 2172, h: 724, inkX: 24, inkY: 192, inkW: 2088, inkH: 371 }

const label = 'text-(length:--fs-foot-label) leading-none font-semibold tracking-[0.14em] text-grey-500 uppercase'
const linkClass =
  'text-(length:--fs-foot-link) leading-[1.5] text-grey-400 transition-colors duration-(--dur-base) ease-(--ease-standard) hover:text-paper focus-visible:text-paper'

/** One link column: uppercase bold heading, then a list with a 1px rule down its left edge. */
function LinkCell({ title, links }: { title: string; links: readonly { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="text-(length:--fs-foot-head) leading-[1.5] font-bold tracking-[0.11em] text-paper uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-[0.98vw] border-l border-(--footer-rule) py-1 pl-[19px] lg:mt-5 lg:space-y-[18px]">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} data-cursor="hover" className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Dark footer on --footer-bg (#050505, sampled: darker than --ink and than the Services surface).
 * Runs nearly edge to edge (28px gutters at 1906). Top: brand block (mark, contact details, social
 * buttons) left, link columns right — Company + one cell per service group in a 359 : 474 : 385
 * grid (measured). Below a hairline: the wordmark at ≈59.5% of the width at ~7.5% opacity, then the
 * copyright / privacy bar. Below 1024px the brand block comes first, the columns go 2-up and the
 * wordmark fills the width.
 */
export default function Footer() {
  const cells = [
    { title: 'Company', links: companyLinks.map((l) => ({ label: l.label, to: l.to })) },
    ...serviceGroups.map((g) => ({
      title: g.title,
      links: g.items.map((item) => ({ label: item.label, to: serviceHref(item.slug) })),
    })),
  ]

  return (
    <footer data-theme="dark" className="bg-footer px-(--footer-gutter) pt-16 pb-6 lg:pt-[4.6vw] lg:pb-[2.85vw]">
      <div className="mx-auto max-w-[120rem]">
        <div className="grid gap-y-14 lg:grid-cols-[minmax(0,1fr)_65.95%]">
          {/* Brand block */}
          <div>
            {/* Replaces the static logo mark (logoMark is still exported from lib/assets.ts; the file is kept and is the WebGL fallback).
                The canvas has empty margin around the artwork (7% left, 9% top/bottom), which the negative margins take back. */}
            <CapybaraWind
              label={`${site.name} mascot: a capybara with fur blowing in the wind, blinking`}
              className="block w-(--w) -mt-[calc(var(--w)*0.09)] -mb-[calc(var(--w)*0.09)] -ml-[calc(var(--w)*0.07)] [--w:12rem] lg:[--w:min(10.2vw,12.5rem)]"
            />

            <div className="mt-10 space-y-[1.9vw] max-lg:space-y-8 lg:mt-[2.7vw]">
              <div>
                <p className={label}>Location</p>
                <address className="mt-[0.95vw] text-(length:--fs-foot-value) leading-[1.5] text-grey-200 not-italic max-lg:mt-3">
                  {site.address}
                </address>
              </div>

              <div className="flex flex-wrap gap-x-[1.6vw] gap-y-8">
                <div>
                  <p className={label}>Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    data-cursor="hover"
                    className="mt-[0.95vw] block text-(length:--fs-foot-value) leading-[1.5] text-grey-200 transition-colors duration-(--dur-base) hover:text-paper max-lg:mt-3"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className={label}>Contact</p>
                  <a
                    href={phoneHref}
                    data-cursor="hover"
                    className="mt-[0.95vw] block text-(length:--fs-foot-value) leading-[1.5] text-grey-200 transition-colors duration-(--dur-base) hover:text-paper max-lg:mt-3"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className={label}>Social</p>
                <ul className="mt-[1vw] flex flex-wrap gap-4 max-lg:mt-4">
                  {site.social.map((s) => (
                    <li key={s.label}>
                      {/* PLACEHOLDER hrefs: replace in data/site.ts */}
                      <a
                        href={s.href}
                        data-cursor="hover"
                        className="flex h-[55px] items-center rounded-[4px] border border-(--footer-rule) px-7 text-(length:--fs-foot-social) font-bold tracking-[0.125em] text-paper uppercase transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-paper hover:bg-paper hover:text-ink"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[359fr_474fr_385fr] lg:gap-x-0 lg:gap-y-[3.1vw]">
            {cells.map((cell) => (
              <LinkCell key={cell.title} title={cell.title} links={cell.links} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-(--footer-line) lg:mt-[4.6vw]">
          {/* The image is cropped to the wordmark's ink so its width is exactly the visible width. */}
          <div
            aria-hidden="true"
            className="relative mx-auto mt-10 w-full overflow-hidden opacity-[0.075] select-none lg:mt-[2.7vw] lg:w-[59.5%]"
            style={{ aspectRatio: `${WORDMARK.inkW} / ${WORDMARK.inkH}` }}
          >
            <img
              src={logoWordmark}
              alt=""
              className="absolute max-w-none"
              style={{
                width: `${(WORDMARK.w / WORDMARK.inkW) * 100}%`,
                left: `${(-WORDMARK.inkX / WORDMARK.inkW) * 100}%`,
                top: `${(-WORDMARK.inkY / WORDMARK.inkH) * 100}%`,
              }}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 text-(length:--fs-foot-label) leading-[1.6] tracking-[0.155em] text-grey-500 uppercase lg:mt-[2.2vw] lg:flex-row lg:items-center lg:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <Link
              to={privacyHref}
              data-cursor="hover"
              className="transition-colors duration-(--dur-base) ease-(--ease-standard) hover:text-paper"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

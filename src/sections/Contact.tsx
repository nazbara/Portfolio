import type { CSSProperties } from 'react'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import { contactChecklist, contactHeading, contactIntro } from '@/data/contact'

/** 36px ring + check, stroke ≈2.5px (measured on the reference icon). */
function CheckCircle() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-9 shrink-0">
      <circle cx="18" cy="18" r="16.75" />
      <path d="M10.8 18.6l4.8 4.8 9.6-10.8" />
    </svg>
  )
}

/**
 * (`variant="dark"` is the About page's version: same layout on a #111 section.)
 * Two columns on white: heading, intro and a checklist on the left (heading 107px, intro 31px light,
 * items 36px icon + 27.5px semibold title + 21px description), the form card on the right (808 of
 * 1766px). Used on Home as an h2 and as the body of /contact as the page's h1 (`page`), where the
 * top padding also clears the fixed header + scrim. Its background (#fff) differs from Testimonials
 * (#f5f5f5), so the two meet at a hard edge — as they do in the reference.
 */
export default function Contact({
  page = false,
  variant = 'light',
  phone = false,
  heading = contactHeading,
  body,
  checklist = true,
  tone = 'raised',
  compact = false,
}: {
  /** /contact page: h1 + room for the fixed header. */
  page?: boolean
  /** dark: #111 section, light text, translucent form card, white submit pill (the About page). */
  variant?: 'light' | 'dark'
  /** Adds the required Phone field (between Email and the message). */
  phone?: boolean
  heading?: string
  /** Replaces the intro line with a larger, cool-grey paragraph (36px light) — the service pages' contact. */
  body?: string
  /** Show the two-item checklist under the intro (default). The service pages leave it out. */
  checklist?: boolean
  /** dark only: `raised` = #111 section (About), `ink` = the site's ink #0a0a0a with a slightly stronger card (service pages). */
  tone?: 'raised' | 'ink'
  /** Tighter padding: 7vw above, 6.3vw below (service pages) instead of 10vw both. */
  compact?: boolean
}) {
  const Heading = page ? 'h1' : 'h2'
  const dark = variant === 'dark'

  return (
    <section
      id="contact"
      data-theme={variant}
      aria-labelledby="contact-heading"
      style={dark && tone === 'ink' ? ({ '--dark-card-bg': 'rgb(255 255 255 / 0.05)' } as CSSProperties) : undefined}
      className={`${dark && tone === 'raised' ? 'bg-dark-contact' : 'bg-canvas'} ${compact ? 'pb-(--about-py)' : 'pb-(--section-py-lg)'} ${
        page
          ? 'pt-[calc(max(var(--scrim-h),var(--header-h))+3rem)] lg:pt-[calc(max(var(--scrim-h),var(--header-h))+4vw)]'
          : compact
            ? 'pt-[clamp(3rem,7vw,8.5rem)]'
            : 'pt-(--section-py-lg)'
      }`}
    >
      <div
        className={`site-container grid gap-y-14 lg:items-start lg:gap-x-[4vw] ${
          tone === 'ink' ? 'lg:grid-cols-[minmax(0,1fr)_47.3%]' : 'lg:grid-cols-[minmax(0,1fr)_45.75%]'
        }`}
      >
        <div>
          <Reveal>
            <Heading
              id="contact-heading"
              className={`text-(length:--fs-section-title) leading-none font-bold tracking-[-0.04em] text-wrap ${dark ? 'uppercase' : ''}`}
            >
              {heading}
            </Heading>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 lg:mt-[2vw]">
            {body ? (
              <p className="max-w-[24em] text-(length:--fs-lead-lg) leading-[1.333] font-light text-fg-quiet">{body}</p>
            ) : (
              <p className="max-w-[25em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-muted">
                {contactIntro}
              </p>
            )}
          </Reveal>

          {checklist && (
          <ul className={`mt-10 space-y-8 lg:mt-[4.1vw] lg:space-y-[2.8vw]`}>
            {contactChecklist.map((item, i) => (
              <Reveal key={item.title} as="li" delay={0.16 + i * 0.08}>
                <div className="grid grid-cols-[2.25rem_1fr] gap-x-5 lg:gap-x-6">
                  <CheckCircle />
                  <h3 className="text-(length:--fs-check-title) leading-9 font-semibold tracking-normal">{item.title}</h3>
                  <p className="col-start-2 mt-1 text-(length:--fs-check-desc) leading-[1.4] text-fg-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          )}
        </div>

        <Reveal delay={0.16}>
          <ContactForm variant={variant} phone={phone} />
        </Reveal>
      </div>
    </section>
  )
}

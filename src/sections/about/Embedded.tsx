import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import { embedded } from '@/data/about-page'
import { getAboutImage } from '@/lib/media'

/**
 * Full-bleed dark section. Behind the text: src/assets/about/last-img.webp shown in grayscale,
 * anchored right and covering the section, under a dark gradient that is solid on the left (where the
 * text sits) and clears towards the right. With no image it is just the dark gradient and a faint
 * gold glow. Label (solid white rule here), a three-line 90px heading in caps, a 45px light lead and
 * a 31px muted paragraph.
 */
export default function Embedded() {
  const image = getAboutImage('last-img')

  return (
    <section
      data-theme="dark"
      aria-labelledby="embedded-heading"
      className="relative isolate overflow-hidden bg-canvas py-(--section-py-lg)"
    >
      <div aria-hidden="true" data-embedded={image ? 'image' : 'fallback'} className="pointer-events-none absolute inset-0 -z-10">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className="size-full object-cover object-right grayscale"
          />
        ) : (
          <div
            className="size-full"
            style={{
              backgroundImage: [
                'radial-gradient(60% 70% at 82% 40%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)',
                'linear-gradient(120deg, var(--grey-900) 0%, var(--ink) 70%)',
              ].join(', '),
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(10 10 10 / 0.95) 0%, rgb(10 10 10 / 0.9) 28%, rgb(10 10 10 / 0.72) 50%, rgb(10 10 10 / 0.3) 70%, rgb(10 10 10 / 0) 90%), linear-gradient(to bottom, rgb(10 10 10 / 0.55), rgb(10 10 10 / 0) 22%, rgb(10 10 10 / 0) 78%, rgb(10 10 10 / 0.55))',
          }}
        />
      </div>

      <div className="site-container">
        <Reveal>
          <SectionLabel bright>{embedded.label}</SectionLabel>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 lg:mt-[2.4vw]">
          <h2
            id="embedded-heading"
            className="text-(length:--fs-statement) leading-none font-bold tracking-[-0.05em] uppercase"
          >
            {embedded.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-8 lg:mt-[3.2vw]">
          <p className="max-w-[22em] text-(length:--fs-lead-xl) leading-[1.2] font-light text-white/95">{embedded.lead}</p>
        </Reveal>

        <Reveal delay={0.24} className="mt-8 lg:mt-[3.1vw]">
          <p className="max-w-[37em] text-(length:--fs-lead-md) leading-[1.35] font-light text-fg-quiet">{embedded.body}</p>
        </Reveal>
      </div>
    </section>
  )
}

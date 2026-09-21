import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import { founders } from '@/data/about-page'
import { getTeamImage } from '@/lib/media'

/**
 * Dark section: label, an uppercase 107px heading, then the founders as cards a third of the width each (half on tablets, full on phones), centred as a group
 * of 4:5 portraits with the same radius as the Work cards (22px). Photos are shown in grayscale and reveal their real colours while the pointer is over the card (or it is pressed on touch);
 * a missing photo falls back to the portrait placeholder (dark gradient, gold glow, big initial).
 * Name in 47px bold caps, role in the cool secondary colour. Hover: image scale 1.03 (transform only).
 */
export default function Founders() {
  return (
    <section data-theme="dark" aria-labelledby="founders-heading" className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <SectionLabel>{founders.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08} className="mt-6 lg:mt-[2.4vw]">
          <h2
            id="founders-heading"
            className="text-(length:--fs-section-title) leading-none font-bold tracking-[-0.04em] uppercase"
          >
            {founders.heading}
          </h2>
        </Reveal>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-[3.8vw] gap-y-14 lg:mt-[5.1vw]">
          {founders.people.map((person, i) => {
            const image = getTeamImage(person.slug)
            return (
              <Reveal
                key={person.slug}
                as="li"
                delay={i * 0.1}
                className="w-full sm:w-[calc((100%-3.8vw)/2)] lg:w-[calc((100%-7.6vw)/3)]"
              >
                <article className="group">
                  <div className="isolate overflow-hidden rounded-(--r-media) bg-grey-900">
                    <div className="transition-transform duration-(--dur-slow) ease-(--ease-out-quart) motion-safe:group-hover:scale-[1.03]">
                      {image ? (
                        <img
                          src={image}
                          alt={`Portrait of ${person.name}`}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="aspect-[4/5] w-full object-cover object-top grayscale transition-[filter] duration-(--dur-slow) ease-(--ease-out-quart) group-hover:grayscale-0 group-active:grayscale-0"
                        />
                      ) : (
                        <PlaceholderArt variant="portrait" mark={person.name.trim().slice(0, 1)} />
                      )}
                    </div>
                  </div>
                  <h3 className="mt-6 text-(length:--fs-founder-name) leading-[1.1] font-bold tracking-[-0.04em] uppercase lg:mt-[1.95vw]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-(length:--fs-role) leading-[1.4] text-fg-quiet lg:mt-[0.45vw]">{person.role}</p>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

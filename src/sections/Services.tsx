import { useId } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { serviceGroups, serviceHref, servicesHeading, type ServiceGroup } from '@/data/services'

/**
 * One full-width row: title | description | tag pills, on a 604 / 604 / 556 column split
 * (measured). The whole row is a link. Its hover / press / keyboard-focus "flip" lives in
 * globals.css (.service-row): white fill, ink text, dark tag borders, and the columns nudge
 * sideways (title +2.5vw, description / tags a third of that, tags the other way).
 * Phones stack the columns and don't get a hover flip (touch gets it on :active).
 */
function ServiceRow({ group }: { group: ServiceGroup }) {
  const id = useId()

  return (
    <Reveal as="li">
      <Link
        to={serviceHref(group.slug)}
        data-cursor="hover"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-desc`}
        className="service-row grid gap-y-5 border-b border-(--row-line) py-8 max-lg:px-4 lg:grid-cols-[34.24%_34.24%_31.52%] lg:items-center lg:py-[3.75vw]"
      >
        <h3
          id={`${id}-title`}
          className="service-row__col text-(length:--fs-row-title) leading-[1.16] font-bold tracking-normal lg:pr-[3vw]"
        >
          {group.title}
        </h3>

        <p
          id={`${id}-desc`}
          className="service-row__col service-row__desc max-w-[20.8em] text-(length:--fs-row-desc) leading-normal font-medium [--row-mult:1] lg:leading-[1.5] lg:[--row-mult:0.3333]"
        >
          {group.description}
        </p>

        <ul className="service-row__col flex flex-wrap gap-[0.6em] text-(length:--fs-tag) font-medium [--row-mult:1] lg:[--row-mult:-0.3333]">
          {group.items.map((item) => (
            <li
              key={item.slug}
              className="service-row__tag inline-flex h-[2.16em] items-center rounded-full border px-[1em] whitespace-nowrap"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Link>
    </Reveal>
  )
}

/**
 * Dark section (on the --surface step, like the reference) with a big heading and one row
 * per service group. `id="services"` is the target of the hero's secondary CTA.
 */
export default function Services() {
  return (
    <section
      id="services"
      data-theme="dark"
      aria-labelledby="services-heading"
      className="bg-surface py-(--section-py-lg)"
    >
      <div className="site-container">
        <Reveal>
          <h2
            id="services-heading"
            className="text-(length:--fs-section-title) leading-none font-bold tracking-[-0.04em] text-wrap"
          >
            {servicesHeading}
          </h2>
        </Reveal>

        {/* On phones the list bleeds 16px into the gutter so the hairlines and the hover/press fill run edge to edge while text stays on the 20px gutter. */}
        <ul className="mt-10 border-t border-(--row-line) max-lg:-mx-4 lg:mt-[6.35vw]">
          {serviceGroups.map((group) => (
            <ServiceRow key={group.slug} group={group} />
          ))}
        </ul>
      </div>
    </section>
  )
}

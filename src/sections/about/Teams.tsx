import Reveal from '@/components/Reveal'
import { teams } from '@/data/about-page'

/** Average advance of one uppercase glyph at weight 800 / tracking -.02em (same fit used by ServiceHero). */
const EM_PER_CHAR = 0.62

/**
 * White section: a huge hero-scale heading (same size/weight as the About hero and Embedded's
 * heading — --fs-about-hero, extrabold, -.02em), sized to fit its longest line at any width, then a
 * light 36px intro, then a 2 × 2 grid (1 column on phones) of cells with 1px hairlines between them
 * (each 880 × 420 at 1908). A huge, almost invisible number 01–04 hangs off the top-right of every
 * cell and is clipped by it. Hover / keyboard focus / touch press flip the cell to ink with a white
 * title and a cool-blue description (.team-cell in globals.css).
 */
export default function Teams() {
  const longest = Math.max(...teams.heading.map((l) => l.length))

  return (
    <section data-theme="light" aria-labelledby="teams-heading" className="overflow-x-clip bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal>
          <div style={{ containerType: 'inline-size' }}>
            <h2
              id="teams-heading"
              className="font-extrabold tracking-[-0.02em] text-fg uppercase"
              style={{
                fontSize: `min(var(--fs-about-hero), calc(100cqw / ${(longest * EM_PER_CHAR).toFixed(2)}))`,
                lineHeight: 0.98,
              }}
            >
              {teams.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 lg:mt-[2.4vw]">
          <p className="max-w-[76%] text-(length:--fs-lead-lg) leading-[1.333] font-light text-ink-slate max-lg:max-w-none">
            {teams.intro}
          </p>
        </Reveal>

        <ul className="mt-12 grid border-t border-l border-line-soft lg:mt-[6vw] lg:grid-cols-2">
          {teams.items.map((team, i) => (
            <Reveal key={team.title} as="li" delay={(i % 2) * 0.08}>
              <div
                tabIndex={0}
                data-cursor="hover"
                className="team-cell relative flex h-full min-h-[18rem] flex-col justify-center overflow-hidden border-r border-b border-line-soft px-6 py-12 lg:min-h-[22vw] lg:px-[5vw] lg:py-[5.2vw]"
              >
                <span
                  aria-hidden="true"
                  className="team-cell__num pointer-events-none absolute top-[-0.155em] right-[-0.2em] leading-none font-extrabold select-none"
                  style={{ fontSize: 'var(--fs-team-num)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="team-cell__title relative text-(length:--fs-team-title) leading-[1.05] font-bold tracking-[-0.04em] uppercase">
                  {team.title}
                </h3>
                <p className="team-cell__desc relative mt-6 max-w-[24em] text-(length:--fs-lead-sm) leading-[1.57] font-light lg:mt-[3.4vw]">
                  {team.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

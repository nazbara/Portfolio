import { useId } from 'react'
import { clients, type Client } from '@/data/clients'
import { clientStripLabel } from '@/data/hero'

/** One copy of the cards. The marquee renders two; the second is aria-hidden. */
function Track({ items, copy = false }: { items: Client[]; copy?: boolean }) {
  return (
    <ul
      aria-hidden={copy || undefined}
      className={`flex shrink-0 gap-(--card-gap) pr-(--card-gap) ${copy ? 'motion-reduce:hidden' : ''}`}
    >
      {items.map((client) => (
        <li
          key={client.name}
          className="flex h-(--card-h) w-(--card-w) shrink-0 items-center justify-center rounded-[1.125rem] bg-paper px-[calc(var(--card-w)*0.08)]"
        >
          {client.logo ? (
            <img
              src={client.logo}
              alt={copy ? '' : client.name}
              loading="lazy"
              draggable={false}
              className="max-h-[52%] max-w-[78%] object-contain"
            />
          ) : (
            <span className="text-center text-[clamp(0.875rem,1.05vw,1.25rem)] leading-tight font-semibold text-grey-500">
              {client.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

/**
 * Hairline + muted label + an infinite marquee of white cards. Sizes are fluid and were
 * measured from the reference at 1916px (card 336×144, gap 24, radius 18). The track holds
 * two identical copies, so translating it by -50% loops seamlessly. Reduced motion: no
 * animation, the copy is hidden and the strip scrolls horizontally instead.
 */
export default function ClientStrip() {
  const labelId = useId()

  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className="border-t border-white/10 pt-[clamp(1.5rem,2.55vw,3rem)] [--card-gap:clamp(1rem,1.26vw,1.5rem)] [--card-h:clamp(5rem,7.55vw,9rem)] [--card-w:clamp(11rem,17.6vw,21rem)]"
    >
      <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-[3.5vw]">
        <p
          id={labelId}
          className="shrink-0 text-[clamp(0.75rem,0.92vw,1.1rem)] font-semibold tracking-[0.13em] whitespace-nowrap text-fg-dim uppercase"
        >
          {clientStripLabel}
        </p>

        <div className="group/marquee w-full min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)] [scrollbar-color:rgb(255_255_255/0.25)_transparent] [scrollbar-width:thin] motion-reduce:overflow-x-auto">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] will-change-transform group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
            <Track items={clients} />
            <Track items={clients} copy />
          </div>
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useId, useState } from 'react'
import Reveal from '@/components/Reveal'
import type { ServicePage } from '@/data/service-pages'
import { serviceCommon } from '@/data/service-pages'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { duration, ease } from '@/lib/motion'

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-[0.5rem] w-6 shrink-0 text-[#a2a1a6] transition-transform duration-(--dur-base) ease-(--ease-standard) ${open ? 'rotate-180' : ''}`}
    >
      <path d="M1.5 1.5 12 12 22.5 1.5" />
    </svg>
  )
}

/**
 * Dark section (heading "FAQ'S" above) with a centred column (78.6vw, ≤ 1500px measured) of hairline-separated rows: a bold 28.6px
 * question and a chevron on the right. Accessible accordion — the question is a real <button aria-expanded
 * aria-controls> inside the heading, the answer a labelled region; one row open at a time, all closed at
 * first, Enter / Space toggle. The answer's height animates with framer-motion (instant under reduced
 * motion) and a closed answer is inert, so it can't be tabbed into or read out. Rows show the custom
 * cursor's "hover" bubble.
 */
export default function Faq({ page }: { page: ServicePage }) {
  const uid = useId()
  const [open, setOpen] = useState<number | null>(null)
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <section data-theme="dark" aria-labelledby={`${uid}-heading`} className="bg-canvas py-(--section-py-lg)">
      <div className="site-container">
        <Reveal className="mx-auto w-full lg:w-[78.6vw] lg:max-w-[93.75rem]">
          <h2
            id={`${uid}-heading`}
            className="mb-10 text-(length:--fs-statement) leading-none font-bold tracking-[-0.045em] uppercase lg:mb-[4vw]"
          >
            {serviceCommon.faqHeading}
          </h2>
          <ul className="border-t border-line">
            {page.faq.map((item, i) => {
              const isOpen = open === i
              const buttonId = `${uid}-q${i}`
              const panelId = `${uid}-a${i}`
              return (
                <li key={item.q} className="border-b border-line">
                  <h3 className="m-0 text-base font-normal tracking-normal">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      data-cursor="hover"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-(length:--fs-faq) leading-[1.2] font-semibold tracking-[-0.01em] lg:py-[2.1vw] lg:pr-[1.6vw]"
                    >
                      {item.q}
                      <Chevron open={isOpen} />
                    </button>
                  </h3>
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduced ? 0 : duration.base + 0.06, ease: ease.outQuart }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[42em] pb-6 text-(length:--fs-lead-sm) leading-[1.5] font-light text-fg-quiet lg:pr-[4vw] lg:pb-[2.1vw]">
                      {item.a}
                    </p>
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

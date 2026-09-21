import type { ReactNode } from 'react'

/**
 * Small uppercase label with a hairline in front (about-frames 01, 07, 15): 18px bold, tracking
 * .195em, the rule 72 × 2px with a 24px gap (40px on phones). On a dark section the text is #b7b7b7
 * and the rule white at ~30%; `bright` (over a photo) makes both solid white. Colours come from the
 * theme tokens, so it also works on light.
 */
export default function SectionLabel({ children, bright = false, className = '' }: { children: ReactNode; bright?: boolean; className?: string }) {
  return (
    <p
      className={`flex items-center gap-4 text-(length:--fs-eyebrow) leading-[1.45] font-bold tracking-[0.195em] uppercase lg:gap-[1.25vw] ${
        bright ? 'text-white' : 'text-fg-label'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-[2px] w-10 shrink-0 lg:w-[3.77vw] lg:max-w-[5.5rem] ${bright ? 'bg-white' : 'bg-current opacity-[0.3]'}`}
      />
      {children}
    </p>
  )
}

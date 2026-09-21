/**
 * Measured dot sets (frames 09/12/13, ≈1906px):
 *   work      13px dots, 42×15 pill, 14px gap (27px pitch)
 *   insights  15px dots, 45×15 pill, 12px gap (27px pitch)
 *   round     15px dots, active is the same size, only darker (testimonials), 12px gap
 * Class names are literal so Tailwind can see them.
 */
const SIZES = {
  work: { gap: 'gap-[14px]', dot: 'h-[13px] w-[13px] opacity-20 hover:opacity-40', active: 'h-[15px] w-[42px]' },
  insights: { gap: 'gap-[12px]', dot: 'h-[15px] w-[15px] opacity-20 hover:opacity-40', active: 'h-[15px] w-[45px]' },
  round: { gap: 'gap-[12px]', dot: 'h-[15px] w-[15px] opacity-[0.13] hover:opacity-30', active: 'h-[15px] w-[15px]' },
} as const

export type SlideDotsSize = keyof typeof SIZES

interface SlideDotsProps {
  count: number
  active: number
  onSelect: (index: number) => void
  /** Accessible name for the group, e.g. "Work slides". */
  label: string
  size?: SlideDotsSize
  className?: string
}

/**
 * Custom pagination for a carousel: small round dots, the active one darker (and, for `work` and
 * `insights`, stretched into a pill). Colours come from the surrounding theme — active is `--fg`,
 * inactive is `--fg` at low opacity — so it is ink on light and white on dark. Each bullet's hit
 * area is padded out to ≥27px with a pseudo-element.
 */
export default function SlideDots({ count, active, onSelect, label, size = 'work', className = '' }: SlideDotsProps) {
  const s = SIZES[size]
  return (
    <div role="group" aria-label={label} className={`flex items-center justify-center ${s.gap} ${className}`}>
      {Array.from({ length: count }, (_, i) => {
        const on = i === active
        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1} of ${count}`}
            aria-current={on ? 'true' : undefined}
            data-active={on ? '' : undefined}
            onClick={() => onSelect(i)}
            className={`relative block cursor-pointer rounded-full bg-fg transition-[width,height,opacity] duration-(--dur-base) ease-(--ease-out-expo) after:absolute after:-inset-[7px] after:content-[''] ${
              on ? s.active : s.dot
            }`}
          />
        )
      })}
    </div>
  )
}

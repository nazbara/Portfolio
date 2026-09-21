/**
 * On-brand stand-in for an image that hasn't been supplied yet: a dark gradient, a faint gold glow
 * and one oversized muted mark. Two variants:
 *  - "tile" (default): fills its (positioned) parent; the mark is the card's index number.
 *  - "portrait": a self-sized 4:5 tile for a person's photo; the mark is their initial.
 * The mark is sized with container-query units so it scales with whatever tile it sits in.
 */
export default function PlaceholderArt({ mark, variant = 'tile' }: { mark: string; variant?: 'tile' | 'portrait' }) {
  const portrait = variant === 'portrait'
  return (
    <div
      aria-hidden="true"
      data-placeholder={variant}
      className={portrait ? 'relative aspect-[4/5] w-full overflow-hidden' : 'absolute inset-0 overflow-hidden'}
      style={{
        containerType: 'size',
        backgroundImage: [
          'radial-gradient(70% 70% at 82% 18%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)',
          'linear-gradient(150deg, var(--grey-800) 0%, var(--grey-900) 55%, var(--ink) 100%)',
        ].join(', '),
      }}
    >
      <span
        className={
          portrait
            ? 'absolute inset-x-0 bottom-[-4cqh] text-center leading-none font-extrabold text-white/[0.07] select-none'
            : 'absolute right-[7cqw] bottom-[-6cqh] leading-none font-extrabold tracking-[-0.06em] text-white/[0.07] select-none'
        }
        style={{ fontSize: portrait ? '70cqh' : '62cqh' }}
      >
        {mark}
      </span>
    </div>
  )
}

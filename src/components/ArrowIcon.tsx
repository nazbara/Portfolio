/** Right arrow used inside pill buttons (24×20 at 21px text: 1.14em × 0.95em), stroke follows currentColor. */
export default function ArrowIcon({ className = 'h-[0.95em] w-[1.14em]' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1.5 10h20M13.5 2l8 8-8 8" />
    </svg>
  )
}

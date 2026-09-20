/** Down chevron sized in em so it scales with the surrounding nav text (≈16×9px at 21px). */
export default function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1.5 1.5 8 8l6.5-6.5" />
    </svg>
  )
}

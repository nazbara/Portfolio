/**
 * One big bold statement built from inline segments — muted segments render dimmer than the rest,
 * so emphasis alternates within a single paragraph. Shared by Challenge.tsx and Results.tsx.
 */
export default function Statement({ segments }: { segments: { text: string; muted?: boolean }[] }) {
  return (
    <p className="text-(length:--fs-statement) leading-[1.1] font-bold tracking-[-0.03em] text-balance">
      {segments.map((segment, i) => (
        <span key={i} className={segment.muted ? 'text-fg-muted' : 'text-fg'}>
          {segment.text}
        </span>
      ))}
    </p>
  )
}

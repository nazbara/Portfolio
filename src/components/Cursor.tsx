import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type Variant = 'default' | 'hover' | 'view'

const DOT = 30 // px, matches the reference
const SCALE: Record<Variant, number> = { default: 1, hover: 2, view: 2.8 } // 30px → 60px / 84px
const FOLLOW = 0.18 // lerp factor per 60fps frame
const FRAME_MS = 1000 / 60

/** Reads the state from the nearest [data-cursor] ancestor — sections never import anything. */
function readState(from: EventTarget | null): { variant: Variant; label: string | null } {
  const host = from instanceof Element ? from.closest<HTMLElement>('[data-cursor]') : null
  switch (host?.dataset.cursor) {
    case 'view':
      return { variant: 'view', label: host.dataset.cursorLabel ?? 'View' }
    case 'hover':
      return { variant: 'hover', label: null }
    default:
      return { variant: 'default', label: null }
  }
}

function CursorDot({ instant }: { instant: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null)
  const [variant, setVariant] = useState<Variant>('default')
  const [label, setLabel] = useState('View')

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const pos = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let visible = false
    let raf = 0
    let last = 0

    const paint = () => {
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    }
    const show = (next: boolean) => {
      visible = next
      dot.style.opacity = next ? '1' : '0'
    }

    // Frame-rate independent lerp; stops itself once the dot has caught up.
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 50) : FRAME_MS
      last = now
      const k = 1 - Math.pow(1 - FOLLOW, dt / FRAME_MS)
      pos.x += (target.x - pos.x) * k
      pos.y += (target.y - pos.y) * k
      if (Math.abs(target.x - pos.x) < 0.1 && Math.abs(target.y - pos.y) < 0.1) {
        pos.x = target.x
        pos.y = target.y
        raf = 0
        last = 0
      } else {
        raf = requestAnimationFrame(tick)
      }
      paint()
    }

    const sync = (e: PointerEvent) => {
      const next = readState(e.target)
      setVariant(next.variant)
      if (next.label) setLabel(next.label)
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      target.x = e.clientX
      target.y = e.clientY
      if (!visible) {
        // First move (or re-entry): appear in place instead of sliding in from the corner.
        pos.x = target.x
        pos.y = target.y
        paint()
        show(true)
      } else if (instant) {
        pos.x = target.x
        pos.y = target.y
        paint()
      } else if (!raf) {
        raf = requestAnimationFrame(tick)
      }
      sync(e)
    }

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') sync(e)
    }
    const onLeave = () => show(false)

    const root = document.documentElement
    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    root.addEventListener('mouseleave', onLeave)
    root.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      root.removeEventListener('mouseleave', onLeave)
      root.removeEventListener('pointerleave', onLeave)
    }
  }, [instant])

  const transition = (property: string, ms: number) =>
    instant ? 'none' : `${property} ${ms}ms var(--ease-out-expo)`

  return (
    // Blend mode lives on the wrapper so the dot and its label invert together:
    // dark over white sections, light over dark ones.
    <div
      ref={dotRef}
      aria-hidden="true"
      data-cursor-dot=""
      data-state={variant}
      className="pointer-events-none fixed top-0 left-0 z-(--z-cursor) opacity-0 mix-blend-difference will-change-transform"
      style={{ transition: instant ? 'none' : 'opacity 200ms linear' }}
    >
      <span
        className="absolute block rounded-full bg-white"
        style={{
          width: DOT,
          height: DOT,
          left: -DOT / 2,
          top: -DOT / 2,
          transform: `scale(${SCALE[variant]})`,
          transition: transition('transform', 250),
        }}
      />
      <span
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[13px] font-semibold tracking-[0.02em] whitespace-nowrap text-ink"
        style={{ opacity: variant === 'view' ? 1 : 0, transition: transition('opacity', 250) }}
      >
        {label}
      </span>
    </div>
  )
}

/** Custom cursor dot. The native cursor stays visible. Off entirely on touch devices. */
export default function Cursor() {
  const coarse = useMediaQuery('(pointer: coarse)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (coarse) return null
  return <CursorDot instant={reducedMotion} />
}

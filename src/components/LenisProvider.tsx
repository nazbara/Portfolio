import Lenis from 'lenis'
import { useEffect, useRef, type ReactNode } from 'react'
import { LenisContext } from '@/lib/lenis-context'

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect the OS setting: fall back to native scrolling.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({ autoRaf: true })
    lenisRef.current = instance

    return () => {
      instance.destroy()
      lenisRef.current = null
    }
  }, [])

  return <LenisContext value={lenisRef}>{children}</LenisContext>
}

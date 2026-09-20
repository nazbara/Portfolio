import { useEffect } from 'react'
import { useLenisRef } from '@/hooks/useLenisRef'

/** Locks page scroll while `locked`. Uses Lenis when it's running, plain overflow otherwise. */
export function useScrollLock(locked: boolean) {
  const lenisRef = useLenisRef()

  useEffect(() => {
    if (!locked) return

    const lenis = lenisRef.current
    if (lenis) {
      lenis.stop()
      return () => lenis.start()
    }

    // Reduced motion → no Lenis instance; lock native scroll instead.
    const html = document.documentElement
    const previous = html.style.overflow
    html.style.overflow = 'hidden'
    return () => {
      html.style.overflow = previous
    }
  }, [locked, lenisRef])
}

import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenisRef } from '@/hooks/useLenisRef'

/** Resets scroll on route change. Keyed on pathname so ?query / #hash changes don't jump. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const lenisRef = useLenisRef()

  useLayoutEffect(() => {
    const lenis = lenisRef.current
    if (lenis) {
      // `force` overrides lenis.stop(), e.g. a scroll-locked menu during navigation.
      lenis.scrollTo(0, { immediate: true, force: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenisRef])

  return null
}

import { use, type RefObject } from 'react'
import type Lenis from 'lenis'
import { LenisContext } from '@/lib/lenis-context'

/** Ref to the active Lenis instance. Must be used inside <LenisProvider>. */
export function useLenisRef(): RefObject<Lenis | null> {
  const ref = use(LenisContext)
  if (!ref) throw new Error('useLenisRef must be used inside <LenisProvider>')
  return ref
}

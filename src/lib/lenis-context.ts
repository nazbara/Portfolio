import type Lenis from 'lenis'
import { createContext, type RefObject } from 'react'

/**
 * Stable ref to the active Lenis instance (`.current` is null until mounted, or
 * when smooth scroll is off). A ref, not state, so consumers never re-render
 * when the instance appears — they read it inside effects and event handlers.
 */
export const LenisContext = createContext<RefObject<Lenis | null> | null>(null)

/**
 * JS mirrors of the CSS motion tokens in styles/tokens.css — framer-motion takes
 * numbers, not var(). Keep both in sync.
 */
type Bezier = [number, number, number, number]

export const ease = {
  standard: [0.4, 0, 0.2, 1],
  outQuart: [0.25, 1, 0.5, 1],
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
  spring: [0.34, 1.56, 0.64, 1],
} satisfies Record<string, Bezier>

/** Seconds (framer-motion), matching --dur-* in tokens.css. */
export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  slower: 0.9,
  reveal: 1.2,
}

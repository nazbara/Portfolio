import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { duration, ease } from '@/lib/motion'

const motionTags = { div: motion.div, li: motion.li, p: motion.p, span: motion.span }

type RevealProps = {
  children: ReactNode
  /** Seconds. Use it to stagger siblings (e.g. index × 0.08). */
  delay?: number
  /** Element to render; pick `li` inside a <ul>. */
  as?: keyof typeof motionTags
  className?: string
}

/**
 * Fades its children up 24px, once, when ~15% of it is in view. Timing comes from the motion
 * tokens. With prefers-reduced-motion it renders a plain element: no hidden start state,
 * no animation.
 */
export default function Reveal({ children, delay = 0, as = 'div', className }: RevealProps) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (reducedMotion) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Motion = motionTags[as] as typeof motion.div
  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: duration.slower, ease: ease.outExpo, delay }}
    >
      {children}
    </Motion>
  )
}

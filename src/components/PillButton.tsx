import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'solid' | 'outline'

type CommonProps = {
  /** solid: filled with the theme's foreground (white on dark, ink on light). outline: 3px currentColor ring. */
  variant?: Variant
  /** solid only: add the same 3px ring the outline variant has (in the fill colour), 84px tall instead of 78. */
  ring?: boolean
  className?: string
  children: ReactNode
}
type LinkProps = CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'>
type ButtonProps = CommonProps & { to?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>

/**
 * Sizes are em-based on --fs-nav, measured from the reference at 1916px: solid 78px tall,
 * outline 84px (78 + a 3px ring each side). Colours use the semantic tokens, so it works on
 * both themes without a prop.
 */
const base =
  'inline-flex items-center justify-center rounded-full text-(length:--fs-nav) font-bold tracking-[0.045em] whitespace-nowrap uppercase transition-[scale,box-shadow,background-color,color] duration-(--dur-base) ease-(--ease-out-expo) hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none'

const variants: Record<Variant, string> = {
  solid: 'h-[3.71em] bg-fg px-[2.36em] text-canvas hover:shadow-glow',
  outline: 'box-content h-[3.71em] border-[0.143em] border-current px-[2.29em] text-fg hover:bg-fg hover:text-canvas',
}

export default function PillButton(props: LinkProps | ButtonProps) {
  const { variant = 'solid', ring = false, className = '', children, ...rest } = props
  const ringClass = ring && variant === 'solid' ? 'box-content border-[0.143em] border-fg' : ''
  const classes = `${base} ${variants[variant]} ${ringClass} ${className}`

  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link data-cursor="hover" {...rest} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" data-cursor="hover" {...(rest as Omit<ButtonProps, keyof CommonProps>)} className={classes}>
      {children}
    </button>
  )
}

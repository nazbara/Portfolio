import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChevronIcon from '@/components/ChevronIcon'
import { serviceGroups, serviceHref } from '@/data/services'
import { ease } from '@/lib/motion'

const CLOSE_DELAY_MS = 120

/**
 * `pinned` = opened by click/keyboard: it stays until Esc, a second click, or focus/pointer
 * leaves. Hover-opened (unpinned) closes ~120ms after the pointer leaves. Tracking the path
 * it was opened on makes it close on navigation without an effect.
 */
type OpenState = { path: string; pinned: boolean } | null

export default function ServicesMenu({ label, activePrefix }: { label: string; activePrefix: string }) {
  const { pathname } = useLocation()
  const [state, setState] = useState<OpenState>(null)
  const open = state !== null && state.path === pathname
  const pinned = open && state.pinned
  const active = pathname.startsWith(activePrefix)

  const panelId = useId()
  const rootRef = useRef<HTMLLIElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const focusFirstItem = useRef(false)

  const clearTimer = () => window.clearTimeout(closeTimer.current)
  const close = () => {
    clearTimer()
    setState(null)
  }

  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    clearTimer()
    setState((s) => (s !== null && s.path === pathname ? s : { path: pathname, pinned: false }))
  }

  const onPointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    clearTimer()
    closeTimer.current = window.setTimeout(() => setState((s) => (s?.pinned ? s : null)), CLOSE_DELAY_MS)
  }

  // Click / Enter / Space. A mouse click on a hover-opened menu pins it rather than closing it.
  const onTriggerClick = () => {
    clearTimer()
    if (pinned) setState(null)
    else setState({ path: pathname, pinned: true })
  }

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowDown') return
    e.preventDefault()
    clearTimer()
    focusFirstItem.current = true
    setState({ path: pathname, pinned: true })
  }

  // Focus the first link once the panel exists (ArrowDown from the trigger).
  useEffect(() => {
    if (!open || !focusFirstItem.current) return
    focusFirstItem.current = false
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
  }, [open, state])

  // While open: Esc closes and returns focus to the trigger; a press outside closes.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return
      window.clearTimeout(closeTimer.current)
      setState(null)
      triggerRef.current?.focus()
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setState(null)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  return (
    <li
      ref={rootRef}
      className="flex h-full"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={(e) => {
        // Tabbing out of the trigger/panel closes it.
        if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) close()
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        data-cursor="hover"
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
        className={`inline-flex h-full items-center gap-[0.47em] px-[1.17em] font-medium transition-colors duration-200 hover:text-white ${
          open || active ? 'text-white' : 'text-white/85'
        }`}
      >
        {label}
        <ChevronIcon
          className={`h-[0.56em] w-[0.83em] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Panel is anchored to the pill wrapper (the nearest positioned ancestor), centred under it. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: ease.outExpo }}
          >
            <div
              ref={panelRef}
              id={panelId}
              role="group"
              aria-label={label}
              className="flex w-max max-w-[calc(100vw-2*var(--gutter))] gap-x-[2.4em] rounded-3xl border border-(--nav-border) bg-(--nav-bg) p-[1.6em] shadow-float backdrop-blur-[20px]"
            >
              {serviceGroups.map((group) => (
                <div key={group.title} className="max-w-[14em]">
                  <p className="mb-[0.9em] text-[0.62em] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {group.title}
                  </p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={serviceHref(item.slug)}
                          data-cursor="hover"
                          onClick={close}
                          className="block py-[0.32em] text-[0.86em] font-medium text-white/85 transition-colors duration-200 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

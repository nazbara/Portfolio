import { useMemo, useState } from 'react'
import PillButton from '@/components/PillButton'
import PlaceholderArt from '@/components/PlaceholderArt'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import { resources, resourcesHeading, resourcesIntro, type Resource } from '@/data/resources'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

type AccessFilter = 'all' | 'free' | 'paid'

function SearchIcon({ className = 'h-[1.1em] w-[1.1em]' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="9" r="6.5" />
      <path d="m18 18-4-4" />
    </svg>
  )
}

/**
 * Image slot (PlaceholderArt) with an access badge, category + title + description, and a
 * bottom action that varies by `format`: 'download' is inert for now (fileUrl is a placeholder
 * '#' — swap this for a plain <a href download> once real files exist), 'prompt' copies
 * promptText to the clipboard and flips its own label to "Copied!" for ~1.5s.
 */
function ResourceCard({ item }: { item: Resource }) {
  const [copied, setCopied] = useState(false)
  const isPrompt = item.format === 'prompt'

  const handleClick = async () => {
    if (isPrompt) {
      try {
        await navigator.clipboard.writeText(item.promptText ?? '')
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } catch {
        // Clipboard access blocked (permissions/insecure context) — nothing more we can do here.
      }
      return
    }
    // TODO: once fileUrl points to a real file, replace this button with a plain <a href={item.fileUrl} download>.
    console.log('download', item.fileUrl)
  }

  const label = isPrompt ? (copied ? 'Copied!' : 'Copy Prompt') : 'Download'

  return (
    <div className="flex h-full flex-col rounded-(--r-media) border border-line-soft bg-paper">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-(--r-media)">
        <PlaceholderArt variant="light" />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-(length:--fs-card-label) leading-none font-bold tracking-[0.06em] uppercase lg:top-[1.1vw] lg:left-[1.1vw] ${
            item.access === 'paid' ? 'bg-accent text-on-accent' : 'bg-fg text-canvas'
          }`}
        >
          {item.access === 'paid' ? item.price : 'Free'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-[1.8vw]">
        <p className="text-(length:--fs-eyebrow) font-bold tracking-[0.14em] text-fg-label uppercase">{item.category}</p>
        <h3 className="mt-2 text-(length:--fs-row-title) leading-[1.2] font-bold tracking-[-0.02em] text-fg lg:mt-[0.6vw]">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-(length:--fs-lead-sm) leading-[1.5] font-light text-fg-muted lg:mt-[0.5vw]">
          {item.description}
        </p>

        <div className="mt-6 lg:mt-[1.4vw]">
          {/*
            box-border! overrides PillButton outline's box-content (which draws its border
            outside the box, so it measures 84px instead of solid's 78px) — with w-full that
            would push this button's border past the card's right edge. Plain `box-border`
            (no `!`) loses to `box-content` regardless of class order — Tailwind's cascade
            follows the generated stylesheet's rule order, not the order classes are listed
            in className — so this needs the trailing `!` (Tailwind's important-marker
            convention, already used on the other overrides here) to actually win. box-border!
            keeps the border inside the 100% width instead, flush with the card padding; the
            tradeoff is this button reads ~3px shorter than outline buttons elsewhere, which is
            fine for a full-width card action and isn't worth compensating for.
          */}
          <PillButton onClick={handleClick} variant="outline" className="h-[2.8em]! w-full! px-[1.5em]! text-(length:--fs-tag)! box-border!">
            {label}
          </PillButton>
        </div>
      </div>
    </div>
  )
}

/**
 * /resources — dark hero (label + heading + subtext) over a light section: a search field
 * (title + description + tags, case-insensitive substring), a category pill row derived from the
 * data plus a separate Free/Paid toggle (ANDed together), a live result count, then a 3/2/1-column
 * grid of ResourceCards. Zero matches shows a centered empty state instead of an empty grid.
 */
export default function Resources() {
  useDocumentTitle('Resources | Nezbara')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [access, setAccess] = useState<AccessFilter>('all')

  const categories = useMemo(() => Array.from(new Set(resources.map((item) => item.category))), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((item) => {
      if (category !== 'All' && item.category !== category) return false
      if (access !== 'all' && item.access !== access) return false
      if (!q) return true
      const haystack = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [query, category, access])

  return (
    <>
      <section
        data-theme="dark"
        className="overflow-x-clip bg-canvas pt-[calc(max(var(--scrim-h),var(--header-h))+clamp(1.25rem,2.85vw,3.5rem))] pb-[clamp(3rem,8vw,7rem)]"
      >
        <div className="site-container">
          <Reveal>
            <SectionLabel bright>Resources</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 lg:mt-[2.35vw]">
            <h1 className="text-(length:--fs-service-hero) leading-[1] font-extrabold tracking-[-0.05em] text-fg uppercase">
              {resourcesHeading}
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="mt-6 max-w-2xl lg:mt-[1.6vw]">
            <p className="text-(length:--fs-lead) text-fg-dim">{resourcesIntro}</p>
          </Reveal>
        </div>
      </section>

      <section data-theme="light" className="bg-canvas py-(--section-py-lg)">
        <div className="site-container">
          <Reveal>
            <div className="relative max-w-md">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-5 h-[1.1em] w-[1.1em] -translate-y-1/2 text-fg-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources…"
                aria-label="Search resources"
                className="h-(--field-h) w-full rounded-full border border-field-line bg-paper pr-5 pl-12 text-(length:--fs-field) font-light text-fg placeholder:text-grey-500"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 lg:mt-[1.8vw]">
            <div className="flex flex-wrap gap-3">
              {['All', ...categories].map((c) => (
                <PillButton
                  key={c}
                  variant={category === c ? 'solid' : 'outline'}
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className="h-[2.6em]! px-[1.5em]! text-(length:--fs-tag)!"
                >
                  {c}
                </PillButton>
              ))}

              <span aria-hidden="true" className="mx-1 h-[2.6em] w-px self-center bg-line" />

              {(['all', 'free', 'paid'] as const).map((a) => (
                <PillButton
                  key={a}
                  variant={access === a ? 'solid' : 'outline'}
                  aria-pressed={access === a}
                  onClick={() => setAccess(a)}
                  className="h-[2.6em]! px-[1.5em]! text-(length:--fs-tag)!"
                >
                  {a === 'all' ? 'Free & Paid' : a === 'free' ? 'Free' : 'Paid'}
                </PillButton>
              ))}
            </div>

            <p className="text-(length:--fs-body) font-semibold text-fg-muted">
              {filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}
            </p>
          </Reveal>

          {filtered.length === 0 ? (
            <Reveal delay={0.16} className="mt-16 text-center lg:mt-[5vw]">
              <p className="text-(length:--fs-lead-md) font-light text-fg-muted">No resources match your search.</p>
            </Reveal>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[3.5vw] lg:grid-cols-3 lg:gap-[1.67vw]">
              {filtered.map((item, i) => (
                <Reveal key={item.slug} delay={Math.min(i, 5) * 0.06}>
                  <ResourceCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

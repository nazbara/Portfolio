/**
 * PLACEHOLDER CLIENTS — replace with the real client list.
 * Logos are picked up by file name — no code needed. Drop `<slug>.png` (or .jpg / .webp) into
 * src/assets/clients/ and run `pnpm optimize:images`; the slug is the client's `name` in lower case with
 * spaces/symbols turned into hyphens ("Client 01" → client-01.png, "Acme & Sons" → acme-sons.png).
 * No file ⇒ the card shows `name` as muted text. `logo` is an optional explicit override.
 */
export type Client = {
  name: string
  logo?: string
}

export const clients: Client[] = [
  { name: 'Client 01' },
  { name: 'Client 02' },
  { name: 'Client 03' },
  { name: 'Client 04' },
  { name: 'Client 05' },
  { name: 'Client 06' },
  { name: 'Client 07' },
  { name: 'Client 08' },
]

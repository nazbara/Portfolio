/**
 * PLACEHOLDER CLIENTS — replace with the real client list.
 * `logo` is optional: when it's missing the card shows `name` as muted text. Real logos go in
 * src/assets/clients/ (run `pnpm optimize:images` after dropping PNGs in) and get imported here.
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

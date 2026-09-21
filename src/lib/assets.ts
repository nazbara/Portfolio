/**
 * Single import point for brand + hero images. Components import from here,
 * never from a raw path, so a file move or rename touches one place.
 *
 * Files are WebP (see scripts/optimize-images.mjs; the original PNGs live in
 * _originals/). The build only ships images a rendered component actually uses,
 * so re-exporting the rest here costs nothing.
 *
 * Usage notes (from inspecting the files):
 *  - logoMark, logoWordmark: transparent images with LIGHT artwork (white/chrome
 *    lettering, gold Z). Use on dark surfaces only — on paper the lettering washes out.
 *  - logoFull: opaque, pure #000 square baked in. Sits as a visible box on --ink
 *    (#0a0a0a); prefer mark/wordmark unless the surface is true black.
 *  - heroPhoto: opaque, near-black edges (avg rgb(4,3,3)), slightly darker than
 *    --ink. Fade its edges into the section background with a gradient/mask.
 */
import logoFull from '@/assets/brand/logo-full.webp'
import logoMark from '@/assets/brand/logo-mark.webp'
import logoWordmark from '@/assets/brand/logo-wordmark.webp'
import heroPhoto from '@/assets/hero/hero-pic.webp'

export { heroPhoto, logoFull, logoMark, logoWordmark }

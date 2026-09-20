import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

const IMAGE = /\.(png|jpe?g|webp|avif|gif|svg)$/i

/**
 * Vite emits an image the moment it enters the module graph, so re-exporting every image
 * from lib/assets.ts would ship all of them even after tree-shaking drops the unused
 * exports. This removes emitted images that no chunk, stylesheet or HTML file still
 * references, so the build contains only images a rendered component actually uses.
 */
function pruneUnusedImages(): Plugin {
  return {
    name: 'prune-unused-images',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      let referencedBy = ''
      for (const item of Object.values(bundle)) {
        if (item.type === 'chunk') referencedBy += item.code
        else if (typeof item.source === 'string' && !IMAGE.test(item.fileName)) referencedBy += item.source
      }

      for (const [fileName, item] of Object.entries(bundle)) {
        if (item.type !== 'asset' || !IMAGE.test(fileName)) continue
        const hashedName = fileName.slice(fileName.lastIndexOf('/') + 1)
        if (!referencedBy.includes(hashedName)) delete bundle[fileName]
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pruneUnusedImages()],
  resolve: {
    alias: {
      // Keep in sync with "paths" in tsconfig.app.json
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

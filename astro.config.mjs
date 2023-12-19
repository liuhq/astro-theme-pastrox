import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  cacheDir: './node_modules/.astro',
  site: 'https://sample.qoqyir.com',
  compressHTML: true,
  base: 'astro-theme-pastrox/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'file',
    assets: 'bundle',
  },
  markdown: {
    syntaxHighlight: false,
  },
})

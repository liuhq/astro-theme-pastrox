import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  cacheDir: './node_modules/.astro',
  site: 'https://sample.qoqyir.com/astro-theme-pastrox/',
  compressHTML: true,
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'file',
    assets: '_astro',
  },
  markdown: {
    syntaxHighlight: false,
  },
})

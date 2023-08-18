import { defineConfig } from 'vite'

export default defineConfig({
  base: '/electronicfirst/',
  root: 'source',
  build: {
    outDir: '../dist'
  }
})
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/astro-player/' : './',
  server: {
    host: true,
  },
})

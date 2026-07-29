import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/StarCanvas-Hoshizora/' : './',
  server: {
    host: true,
  }
})

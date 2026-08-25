import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ruturaj930.github.io',
  base: process.env.GITHUB_ACTIONS ? '/GTA5' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})

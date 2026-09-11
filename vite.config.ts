import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = process.env.GITHUB_ACTIONS ? '/verox/' : '/'

export default defineConfig({
  base,
  server: process.env.PORT
    ? { port: Number(process.env.PORT), strictPort: true }
    : undefined,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-404',
      closeBundle() {
        const index = resolve('dist/index.html')
        if (existsSync(index)) copyFileSync(index, resolve('dist/404.html'))
      },
    },
  ],
})

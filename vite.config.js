import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        copyFileSync(
          resolve(__dirname, 'public/404.html'),
          resolve(__dirname, 'dist/404.html')
        )
      }
    }
  ],
  base: process.env.NODE_ENV === 'production' ? '/realestate/' : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

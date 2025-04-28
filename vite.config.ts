import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // 👈 Needed for Docker live reload
    port: 5173,              // 👈 or any port you want
    strictPort: true,        // Fail if port is taken (good for Docker)
    watch: {
      usePolling: true,      // 👈 VERY important for Docker file changes
    },
  },
  css: {
    postcss: './postcss.config.js', // optional, Vite auto-detects usually
  },
})

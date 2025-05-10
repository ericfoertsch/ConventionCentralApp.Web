import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [
      'tailwindcss',
      '@radix-ui/react-separator',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-slot',
      '@radix-ui/react-accordion',
      '@radix-ui/react-label'
    ],
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
})

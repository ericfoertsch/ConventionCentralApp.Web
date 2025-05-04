import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    host: true,             // Needed for Docker live reload
    port: 5173,             // Or any port you want
    strictPort: true,       // Fail if port is taken (good for Docker)
    watch: {
      usePolling: true,     // Very important for Docker file changes
    },
}});

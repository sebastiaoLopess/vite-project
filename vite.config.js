import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    open: true,
    https: true,
    proxy: {
      '/api': {
        target: 'https://apps-luke-dot-autoavaliar-apps.appspot.com',
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})

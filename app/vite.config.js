import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/session': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/users': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/guest': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  preview: {
    port: 3000,
  },
});
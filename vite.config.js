import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['@resvg/resvg-js']
  },
  optimizeDeps: {
    exclude: ['fs']
  }
});
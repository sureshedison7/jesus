import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['@resvg/resvg-js'],
    external: ['fs']
  },
  optimizeDeps: {
    exclude: ['fs']
  }
});
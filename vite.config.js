import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cviceni-detsky-koutek/',
  root: './src',
  publicDir: '../../public',
  server: {
    hmr: true,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react()],
});

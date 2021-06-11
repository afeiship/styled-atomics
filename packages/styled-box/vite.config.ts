import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
// https://github.com/antfu/vite-plugin-pwa

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ['@jswork/styled-plugin-compose-entity', '@jswork/styled-plugin-normalize']
  },
  plugins: [reactRefresh()]
});

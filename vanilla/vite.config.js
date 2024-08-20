import { defineConfig } from 'vite';
import ejsPlugin from './vite-plugin-ejs';

export default defineConfig({
  plugins: [ejsPlugin()],
  build: {
    rollupOptions: {
      input: './src/index.ejs'
    }
  },
  optimizeDeps: {
    include: ['ejs']
  }
});
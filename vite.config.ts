import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        // Добавление мета-тегов в <head>
        tags: [
          {
            tag: 'meta',
            attrs: {
              httpEquiv: 'Cache-Control',
              content: 'no-cache, no-store, must-revalidate',
            },
          },
          {
            tag: 'meta',
            attrs: {
              httpEquiv: 'Pragma',
              content: 'no-cache',
            },
          },
          {
            tag: 'meta',
            attrs: {
              httpEquiv: 'Expires',
              content: '0',
            },
          },
        ],
      },
    }),
  ],
  server: {
    headers: {
      'Cache-Control': 'no-store', // Запретить кеширование
    },
  },
});

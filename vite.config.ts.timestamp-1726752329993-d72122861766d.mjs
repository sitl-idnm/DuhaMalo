// vite.config.ts
import { defineConfig } from "file:///C:/Users/TemaV/Desktop/github/kim%20agency/DuhaMalo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/TemaV/Desktop/github/kim%20agency/DuhaMalo/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/TemaV/Desktop/github/kim%20agency/DuhaMalo/node_modules/vite-plugin-svgr/dist/index.js";
import { createHtmlPlugin } from "file:///C:/Users/TemaV/Desktop/github/kim%20agency/DuhaMalo/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        // Добавление мета-тегов в <head>
        tags: [
          {
            tag: "meta",
            attrs: {
              httpEquiv: "Cache-Control",
              content: "no-cache, no-store, must-revalidate"
            }
          },
          {
            tag: "meta",
            attrs: {
              httpEquiv: "Pragma",
              content: "no-cache"
            }
          },
          {
            tag: "meta",
            attrs: {
              httpEquiv: "Expires",
              content: "0"
            }
          }
        ]
      }
    })
  ],
  server: {
    headers: {
      "Cache-Control": "no-store"
      // Запретить кеширование
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUZW1hVlxcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxraW0gYWdlbmN5XFxcXER1aGFNYWxvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUZW1hVlxcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxraW0gYWdlbmN5XFxcXER1aGFNYWxvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9UZW1hVi9EZXNrdG9wL2dpdGh1Yi9raW0lMjBhZ2VuY3kvRHVoYU1hbG8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHN2Z3IoKSxcclxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICBpbmplY3Q6IHtcclxuICAgICAgICAvLyBcdTA0MTRcdTA0M0VcdTA0MzFcdTA0MzBcdTA0MzJcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDNDXHUwNDM1XHUwNDQyXHUwNDMwLVx1MDQ0Mlx1MDQzNVx1MDQzM1x1MDQzRVx1MDQzMiBcdTA0MzIgPGhlYWQ+XHJcbiAgICAgICAgdGFnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6ICdtZXRhJyxcclxuICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICBodHRwRXF1aXY6ICdDYWNoZS1Db250cm9sJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiAnbWV0YScsXHJcbiAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgaHR0cEVxdWl2OiAnUHJhZ21hJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAnbm8tY2FjaGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiAnbWV0YScsXHJcbiAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgaHR0cEVxdWl2OiAnRXhwaXJlcycsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJzAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUnLCAvLyBcdTA0MTdcdTA0MzBcdTA0M0ZcdTA0NDBcdTA0MzVcdTA0NDJcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDNBXHUwNDM1XHUwNDQ4XHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM1XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFWLFNBQVMsb0JBQW9CO0FBQ2xYLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx3QkFBd0I7QUFFakMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsaUJBQWlCO0FBQUEsTUFDZixRQUFRO0FBQUE7QUFBQSxRQUVOLE1BQU07QUFBQSxVQUNKO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsY0FDTCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsY0FDTCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsY0FDTCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLGlCQUFpQjtBQUFBO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

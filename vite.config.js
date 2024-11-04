import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'
import glsl from 'vite-plugin-glsl';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    ...templateCompilerOptions
  }),
  glsl()],
  server: {
    proxy: {
      "/images": {
        target: "https://opensource-1314935952.cos.ap-nanjing.myqcloud.com",
        changeOrigin: true,
      }
    }
  }
})

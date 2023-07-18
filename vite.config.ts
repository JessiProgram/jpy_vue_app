import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueEnv from 'vite-plugin-vue-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueEnv()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

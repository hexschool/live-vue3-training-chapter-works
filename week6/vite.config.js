import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/live-vue3-training-chapter-works/week6/dist/',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
})

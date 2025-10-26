// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ahmed-Kamel-Portfolio/', // يجب أن يكون موجوداً بهذا الشكل
})
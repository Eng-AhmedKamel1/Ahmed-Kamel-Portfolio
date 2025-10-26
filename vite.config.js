// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // تأكد من وجود هذا السطر
  base: '/Ahmed-Kamel-Portfolio/', 
})
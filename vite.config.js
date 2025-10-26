import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ahmed-Kamel-Portfolio/', // 👈 لازم يكون نفس اسم الريبو بالضبط
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ahmed-Kamel-Portfolio/', // 👈 ده اللي بيحل مشكلة 404
})

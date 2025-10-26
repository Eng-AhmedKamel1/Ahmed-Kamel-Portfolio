import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  base: '/Ahmed-Kamel-Portfolio/', // 👈 لازم يكون نفس اسم الريبو بالضبط
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ahmed-Kamel-Portfolio/', // 👈 ده اللي بيحل مشكلة 404
>>>>>>> 2d85049131ddc08326a07d182d0eae7c44a7a96a
})

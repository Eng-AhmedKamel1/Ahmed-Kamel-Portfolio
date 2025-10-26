// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 1. يحدد المسار الأساسي
  base: '/Ahmed-Kamel-Portfolio/', 
  
  // 2. تأكد أن assetsDir (مجلد الأصول) فارغ أو محذوف
  // إذا كان موجوداً، يجب أن يكون ضمن 'build'
  
  // تأكد أنك لا تستخدم الإعدادات القديمة لـ CRA أو Webpack!
})
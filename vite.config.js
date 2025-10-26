// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// تأكد أن هذا الاسم مطابق تماماً لاسم مستودعك على GitHub
const repoName = 'Ahmed-Kamel-Portfolio'; 

export default defineConfig({
  plugins: [react()],
  
  // يتم إضافة خاصية base هنا لتصحيح المسارات على GitHub Pages
  base: `/${repoName}/`, 
})
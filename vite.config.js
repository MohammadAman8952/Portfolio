import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
//npm install lucide-react react-router-dom tailwind-merge
// now for ui npm install @radix-ui/react-toast class-variance-authority clsx
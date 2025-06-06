import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Ensure base is set if deploying to a subpath, or leave as "/" for root
export default defineConfig({
  plugins: [react()],
  base: "./", // <-- ADD THIS if you're seeing broken styles or missing assets
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ashwanipydev.github.io/youtube_clone/",
  plugins: [react()],
})

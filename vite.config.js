import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'; // Import resolve to set path alias
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Alias '@' to the 'src' directory
    }
  }
})

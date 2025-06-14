import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: parseInt(process.env.VITE_FRONT_PORT || '3000'), 
  }
})

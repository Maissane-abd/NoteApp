import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

    // "@reduxjs/toolkit": "^1.9.5",
    // "react": "^18.2.0",
    // "react-dom": "^18.2.0",
    // "react-redux": "^8.0.5",
    // "react-router-dom": "^6.11.1",
    // "uuidv4": "^6.2.13"
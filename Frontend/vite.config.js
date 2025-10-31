import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

  

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from external networks
    port:5173, // Your port number
    strictPort: true, // Ensures the selected port is used
    allowedHosts: ['.loca.lt'] // Allows all LocalTunnel subdomains
  }

})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🔑 LÍNEA CLAVE: El nombre de tu repositorio es 'plantshop'
  base: '/plantshop/', 
});

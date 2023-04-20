import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import macrosPlugin from "vite-plugin-babel-macros"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    macrosPlugin(),
    react(),
  ],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  base: '/SOLID-React/',
});

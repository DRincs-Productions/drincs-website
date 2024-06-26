import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg?react",
    }),
    react(),
    checker({
      typescript: true,
    }),
  ],
})

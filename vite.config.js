import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname), // Use import.meta.url to get current file's directory
    },
  },
  esbuild: {
    jsxInject: `import React from 'react';`, // This injectos React automatically for JSX files
  },
})

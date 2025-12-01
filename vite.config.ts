import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@components': path.resolve(__dirname, './src/core/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});

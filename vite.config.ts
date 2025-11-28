import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()], // SVG를 React 컴포넌트로 변환
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/milestone25/', // 서브디렉토리 배포 경로
  plugins: [react(), svgr(), tsconfigPaths()], // SVG를 React 컴포넌트로 변환
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

async function enableMocking() {
  if (import.meta.env.VITE_API_MODE !== 'msw') return;
  const { worker } = await import('./mocks/browser');
  await worker.start({ onUnhandledRequest: 'warn' });
}

enableMocking()
  .catch((error) => {
    console.error('[MSW] Mock 서비스 워커를 활성화하는 동안 오류가 발생했습니다.', error);
  })
  .finally(() => {
    createRoot(document.getElementById('root')!)
      .render(
        <StrictMode>
          <App />
        </StrictMode>,
      );
  });


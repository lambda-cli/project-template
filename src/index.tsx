import React from 'react';
import ReactDOM from 'react-dom';
import setupLocatorUI from '@locator/runtime';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from '@/router.tsx';

import './global.less';

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  if (!API_BASE_URL) {
    const { mockServiceWorker } = await import('../mocks/setup');
    mockServiceWorker.start({ onUnhandledRequest: 'bypass' });
  }
}

const CONTAINER = document.getElementById('root');
const queryClient = new QueryClient();

if (!CONTAINER) {
  throw document.write('<b>当前页面不存在 id=root 的 DOM 节点</b>');
} else {
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    CONTAINER,
  );
}

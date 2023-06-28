import React from 'react';
import ReactDOM from 'react-dom';
import setupLocatorUI from '@locator/runtime';
import App from '@/router.tsx';

import './global.less';

console.log('App=', App);

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // if (!API_BASE_URL) {
  // }
}

const CONTAINER = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  __webpack_public_path__ = window.__webpack_public_path__ || '/';
}

if (!CONTAINER) {
  throw document.write('<b>当前页面不存在 id=root 的 DOM 节点</b>');
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    CONTAINER,
  );
}

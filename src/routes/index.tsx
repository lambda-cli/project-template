import React, { lazy } from 'react';

const Root = lazy(() => import('@/pages/index'));
const Detail = lazy(() => import('@/pages/Detail'));

const routes = [
  {
    path: '/',
    element: Root,
  },
  {
    path: '/detail',
    element: Detail,
  },
];

export default routes;

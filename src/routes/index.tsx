import React, { lazy } from 'react';

const Root = lazy(() => import('@/pages/index'));
const List = lazy(() => import('@/pages/List'));

const routes = [
  {
    path: '/',
    element: Root,
  },
  {
    path: '/list',
    element: List,
  },
];

export default routes;

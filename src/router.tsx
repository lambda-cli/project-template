import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from '@/routes';

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <route.element />
      </Suspense>
    ),
  })),
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

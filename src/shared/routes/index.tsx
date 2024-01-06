import { Suspense } from 'react';
import { Routes } from 'react-router-dom';

function Router({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<h1>loading...........</h1>}>
      <Routes>{children}</Routes>
    </Suspense>
  );
}

export default Router;

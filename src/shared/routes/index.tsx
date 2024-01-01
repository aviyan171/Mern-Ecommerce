import { Routes } from 'react-router-dom';

function Router({ children }: { children: React.ReactNode }) {
  return <Routes>{children}</Routes>;
}

export default Router;

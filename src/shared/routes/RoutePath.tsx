import { lazy } from 'react';
import { Route } from 'react-router-dom';
import Router from '.';

const Home = lazy(() => import('features/home/pages'));
const HomePage = lazy(() => import('features/navbar/pages'));

function RoutePath() {
  return (
    <Router>
      <Route path="/store" element={<HomePage />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Router>
  );
}

export default RoutePath;

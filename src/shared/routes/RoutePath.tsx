import Home from 'features/home/pages';
import HomePage from 'features/navbar/pages';
import { Route } from 'react-router-dom';
import Router from '.';

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

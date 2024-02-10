import Login from 'features/auth/login/pages';
import Category from 'features/category/pages';
import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { UI_ROUTES } from 'shared/constants';
import AuthLayout from 'shared/layout/AuthLayout';
import Router from '.';

const Home = lazy(() => import('features/home/pages'));
const HomePage = lazy(() => import('shared/features/navbar/pages'));
const Cart = lazy(() => import('features/cart/pages'));
const ProductDetails = lazy(() => import('features/product-details/pages'));
const Checkout = lazy(() => import('features/checkout/pages'));
const Contact = lazy(() => import('features/contact/pages'));

function RoutePath() {
  return (
    <Router>
      <Route element={<AuthLayout />}>
        <Route path={UI_ROUTES.login} element={<Login />} />
      </Route>
      <Route path="/store" element={<HomePage />}>
        <Route path={UI_ROUTES.home} element={<Home />} />
        <Route path={UI_ROUTES.category} element={<Category />} />
        <Route path={UI_ROUTES.cart} element={<Cart />} />
        <Route path={UI_ROUTES.productDetails} element={<ProductDetails />} />
        <Route path={UI_ROUTES.checkout} element={<Checkout />} />
        <Route path={UI_ROUTES.contacts} element={<Contact />} />
      </Route>
    </Router>
  );
}

export default RoutePath;

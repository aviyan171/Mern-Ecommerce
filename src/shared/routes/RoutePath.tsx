import Login from 'features/auth/login/pages';
import Register from 'features/auth/register/page';
import Category from 'features/category/pages';
import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { UI_ROUTES } from 'shared/constants';
import { AdminLayout } from 'shared/layout/AdminLayout';
import AuthLayout from 'shared/layout/AuthLayout';
import Router from '.';

const Home = lazy(() => import('features/home/pages'));
const HomePageLayout = lazy(() => import('shared/layout/HomePageLayout'));
const Cart = lazy(() => import('features/cart/pages'));
const ProductDetails = lazy(() => import('features/product-details/pages'));
const Checkout = lazy(() => import('features/checkout/pages'));
const Contact = lazy(() => import('features/contact/pages'));
const AdminHome = lazy(() => import('features/admin/home/pages'));

function RoutePath() {
  return (
    <Router>
      <Route element={<AuthLayout />}>
        <Route path={UI_ROUTES.login} element={<Login />} />
        <Route path={UI_ROUTES.register} element={<Register />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path={UI_ROUTES.admin.home} element={<AdminHome />} />
      </Route>
      <Route element={<HomePageLayout />}>
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

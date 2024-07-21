import Login from 'features/auth/login/pages'
import Register from 'features/auth/register/page'
import Category from 'features/category/pages'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { UI_ROUTES } from 'shared/constants'
import { AdminLayout } from 'shared/layout/AdminLayout'
import AuthLayout from 'shared/layout/AuthLayout'
import Router from '.'

const Home = lazy(() => import('features/home/pages'))
const HomePageLayout = lazy(() => import('shared/layout/HomePageLayout'))
const Cart = lazy(() => import('features/cart/pages'))
const ProductDetails = lazy(() => import('features/product-details/pages'))
const Checkout = lazy(() => import('features/checkout/pages'))
const Contact = lazy(() => import('features/contact/pages'))
const AdminHome = lazy(() => import('features/admin/home/pages'))
const AddProduct = lazy(() =>
  import('features/admin/add-product/pages/index').then(module => ({
    default: module.AddProduct
  }))
)
const ProductTable = lazy(() => import('features/admin/product-table/pages'))
const OrderTable = lazy(() => import('features/admin/order-table/pages'))
const OrderDetails = lazy(() => import('features/admin/order-details/pages'))

function RoutePath() {
  return (
    <Router>
      <Route element={<AuthLayout />}>
        <Route path={UI_ROUTES.login} element={<Login />} />
        <Route path={UI_ROUTES.register} element={<Register />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path={UI_ROUTES.admin.home} element={<AdminHome />} />
        <Route path={UI_ROUTES.admin.addProduct} element={<AddProduct />} />
        <Route path={UI_ROUTES.admin.productTable} element={<ProductTable />} />
        <Route path={UI_ROUTES.admin.orderTable} element={<OrderTable />} />
        <Route path={UI_ROUTES.admin.orderDetails} element={<OrderDetails />} />
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
  )
}

export default RoutePath

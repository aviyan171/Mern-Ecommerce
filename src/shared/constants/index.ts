export const MAX_WIDTH = {
  NAVBAR_INNER_WIDTH: '1170px',
  DRAWER_WIDTH: '280px',
  COLLAPSIBLE_DRAWER_WIDTH: '75px',
};

export const UI_ROUTES = {
  login: '/',
  register: '/register',
  home: '/store/home',
  category: '/store/category',
  pages: '/store/pages',
  blog: '/store/blog',
  contacts: '/store/contacts',
  cart: '/store/cart',
  productDetails: '/store/product-details',
  checkout: '/store/checkout',
  admin: {
    home: '/admin/home',
  },
};

export const PAGES = [
  {
    name: 'Home',
    to: UI_ROUTES.home,
  },
  {
    name: 'Shop',
    to: UI_ROUTES.category,
  },
  {
    name: 'Contacts',
    to: UI_ROUTES.contacts,
  },
];

export const sizes = ['XXL', 'XL', 'L', 'S'];

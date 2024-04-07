import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

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
    addProduct: '/admin/add-product',
    productTable: '/admin/product-table',
    orderTable: '/admin/order-table',
    orderDetails: '/admin/order-details',
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

export const months = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: true,
  datasets: {
    bar: {
      backgroundColor: '#3182CE', // Adjust the bar color here
      grouped: true,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Monthly Sales',
      font: {
        size: 16,
        weight: 'bold',
      },
      padding: {
        bottom: 10,
      },
    },
    tooltip: {
      padding: 10,
      cornerRadius: 6,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleFont: {
        size: 14,
        weight: 'bold',
      },
      bodyFont: {
        size: 12,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        font: {
          size: 12,
        },
      },
    },
  },
};

export const doughnutChartOptions: ChartOptions<'doughnut'> = {
  responsive: true,

  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      padding: 10,
      cornerRadius: 6,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleFont: {
        size: 14,
        weight: 'bold',
      },
      bodyFont: {
        size: 12,
      },
    },
  },
};

export const adminRoutes = [
  {
    name: 'Dashboard',
    img: 'https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-dashboard-line-icon-vector-png-image_6626604.png',
    link: UI_ROUTES.admin.home,
  },

  {
    name: 'Products',
    img: 'https://cdn-icons-png.freepik.com/256/2652/2652218.png',
    link: UI_ROUTES.admin.productTable,
  },
  {
    name: 'Orders',
    img: 'https://icons.veryicon.com/png/o/miscellaneous/icondian/icon-order-1.png',
    link: UI_ROUTES.admin.orderTable,
  },
];

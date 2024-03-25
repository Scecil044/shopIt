import ProductsLayout from "../components/layouts/ProductsLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Chats from "../pages/admin/Chats";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Checkout from "../pages/checkout/Checkout";
import Product from "../pages/products/Product";
import ProductListing from "../pages/products/ProductListing";

const guestRoutes = [
  {
    path: "/login",
    element: Login,
    exact: true,
  },
  {
    path: "/login",
    element: Register,
    exact: true,
  },
];

const adminRoutes = [
  {
    path: "/dashboard",
    element: Dashboard,
    exact: true,
  },
  {
    path: "/users",
    element: Users,
    exact: true,
  },
  {
    path: "/chats",
    element: Chats,
    exact: true,
  },
];

const mainRoutes = [
  {
    path: "/",
    element: Home,
    exact: true,
  },
  {
    path: "/checkout",
    element: Checkout,
    exact: true,
  },
  {
    path: "/product",
    element: Product,
    exact: true,
  },
  {
    path: "/products",
    element: ProductsLayout,
    children: [
      {
        path: "/",
        element: ProductListing,
        exact: true,
      },
    ],
  },
  {
    path: "*",
    element: NotFound,
    exact: true,
  },
];
export { guestRoutes, adminRoutes, mainRoutes };

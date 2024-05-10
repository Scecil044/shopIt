import Shop from "../pages/shop/Shop";
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
import Search from "../pages/products/Search";
import Support from "../pages/support/Support";
import Cart from "../pages/checkout/Cart";
import WishList from "../pages/checkout/WishList";
import Profile from "../pages/profile/Profile";
import Traders from "../pages/admin/Traders";
import SystemOrders from "../pages/admin/SystemOrders";
import SystemReports from "../pages/admin/SystemReports";
import SystemSupport from "../pages/admin/SystemSupport";
import AdminProfile from "../pages/admin/AdminProfile";
import ForumHome from "../pages/forum/ForumHome";

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
  {
    path: "*",
    element: NotFound,
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
    path: "/profile/:id",
    element: AdminProfile,
    exact: true,
  },
  {
    path: "/traders",
    element: Traders,
    exact: true,
  },
  {
    path: "/system/orders",
    element: SystemOrders,
    exact: true,
  },
  {
    path: "/system/support",
    element: SystemSupport,
    exact: true,
  },
  {
    path: "/system/reports",
    element: SystemReports,
    exact: true,
  },
  {
    path: "/chats",
    element: Chats,
    exact: true,
  },
  {
    path: "*",
    element: NotFound,
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
    path: "/profile",
    element: Profile,
    exact: true,
  },
  {
    path: "/shop",
    element: Shop,
    exact: true,
  },
  {
    path: "/cart",
    element: Cart,
    exact: true,
  },
  {
    path: "/wish/list",
    element: WishList,
    exact: true,
  },
  {
    path: "/search",
    element: Search,
    exact: true,
  },
  {
    path: "/support",
    element: Support,
    exact: true,
  },
  {
    path: "/forum",
    element: ForumHome,
    exact: true,
  },
  {
    path: "*",
    element: NotFound,
    exact: true,
  },
];

const productRoutes = [
  {
    path: "/list",
    element: ProductListing,
    exact: true,
  },
  {
    path: "*",
    element: NotFound,
    exact: true,
  },
];
export { guestRoutes, adminRoutes, mainRoutes, productRoutes };

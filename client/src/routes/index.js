import Home from "../pages/Home";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

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
];

const mainRoutes = [
  {
    path: "/",
    element: Home,
    exact: true,
  },
];
export { guestRoutes, adminRoutes, mainRoutes };

import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoutes } from "../../routes";
import AdminSidebar from "../admin/AdminSidebar";
import AdminHeader from "../admin/AdminHeader";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const { user } = useSelector((state) => state.user);
  return user && user.isAdmin ? (
    <div className="min-h-screen">
      <AdminHeader />
      <main className="flex gap-5 bg-pampas">
        <AdminSidebar />
        <div className="p-10 w-full">
          <Routes>
            {adminRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
}

import { Routes, Route } from "react-router-dom";
import { adminRoutes } from "../../routes";
import AdminSidebar from "../admin/AdminSidebar";
import AdminHeader from "../admin/AdminHeader";
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      <AdminHeader />
      <main className="flex gap-5 bg-pampas">
        <AdminSidebar />
        <div className="p-10">
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
  );
}

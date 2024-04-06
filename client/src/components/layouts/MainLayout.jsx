import { useSelector } from "react-redux";
import { mainRoutes } from "../../routes";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Routes, Route, Navigate } from "react-router-dom";

export default function MainLayout({ children }) {
  const { user } = useSelector((state) => state.user);
  return user && user.role === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <div className="min-h-screen">
      <Header />
      <Routes>
        {mainRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

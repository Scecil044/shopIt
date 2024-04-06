import { useSelector } from "react-redux";
import { guestRoutes } from "../../routes";
import { Routes, Route, Navigate } from "react-router-dom";

export default function GuestLayout({ children }) {
  const { user } = useSelector((state) => state.user);
  return !user ? (
    <div className="min-h-screen">
      <Routes>
        {guestRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

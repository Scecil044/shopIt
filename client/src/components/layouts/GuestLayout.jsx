import { guestRoutes } from "../../routes";
import { Routes, Route } from "react-router-dom";

export default function GuestLayout({ children }) {
  return <div className="min-h-screen">
     <Routes>
        {guestRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
  </div>;
}

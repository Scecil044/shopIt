import { mainRoutes } from "../../routes";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Routes, Route } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
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

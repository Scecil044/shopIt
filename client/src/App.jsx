import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import GuestLayout from "./components/layouts/GuestLayout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/auth/*" element={<GuestLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

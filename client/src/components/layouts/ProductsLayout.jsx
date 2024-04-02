import { Route, Routes } from "react-router-dom";
import { productRoutes } from "../../routes";
import Header from "../common/Header";
import Footer from "../common/Footer";
export default function ProductsLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex gap-3 min-h-screen p-5 items-start bg-gray-200 overflow-hidden">
        <div className="min-w-[300px] bg-white shadow-md shadow-gray-200 p-5 rounded-md border border-gray-100">
          one tow three
        </div>
        <main className=" overflow-x-scroll snap-x shadow-md shadow-gray-200 p-5 rounded-md border border-gray-100">
          <Routes>
            {productRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <>
      <div className="flex gap-5 min-h-screen">
        <aside>one tow three</aside>
        <main className="bg-green-200 flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

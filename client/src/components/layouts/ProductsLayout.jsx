import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <>
      <div className="flex gap-5 min-h-screen">
        <aside>one tow three</aside>
        <main className="flex-1">
          content here
          <Outlet />
        </main>
      </div>
    </>
  );
}

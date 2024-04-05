import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen inset-0 w-full fixed bg-pampas z-50 flex items-center justify-center bg-black/10">
      <div className="flex items-center">
        <div>
          <img src="/tri.png" alt="" />
        </div>
        <div className="flex gap-5">
          <div>
            <h1 className="text-6xl font-semibold">404</h1>
          </div>
          <div>
            <h1 className="text-xl">Page Not Found</h1>
            <p className="mb-1">
              The resource you tried to access is not a registered route in this
              application!
            </p>
            <Link
              to="/"
              className="py-1 text-white bg-appRed px-4 shadow-md hover:shadow-sm"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

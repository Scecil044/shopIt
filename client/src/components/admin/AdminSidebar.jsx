import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <>
      <div className="min-h-screen bg-pink-800 text-white w-[10%]">
        <ul className="flex flex-col">
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link to="/admin/users" className="flex items-center gap-1 px-2">
              <FaUsers className="h-5 w-5" />
              <h1 className="hidden md:inline">Users</h1>
            </Link>
          </li>
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link to="/admin/users" className="flex items-center gap-1 px-2">
              <FaUsers className="h-5 w-5" />
              <h1 className="hidden md:inline">Users</h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

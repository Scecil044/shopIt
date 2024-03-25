import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <>
      <div className="min-h-screen bg-appBlue text-white w-[200px]">
        sidebar
        <ul>
          <li className="py-2 px-2 w-full hover:bg-black/50">
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { FaChevronUp, FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalLibrary } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function AdminSidebar() {
  const [usersDropDown, setUsersDropDown] = useState(true);
  return (
    <>
      <div className="min-h-screen bg-appRed text-white w-[10%]">
        <ul className="flex flex-col gap-1">
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-1 px-2"
            >
              <FaHome className="h-5 w-5" />
              <h1 className="hidden md:inline">Home</h1>
            </Link>
          </li>
          <li
            onClick={() => {
              setUsersDropDown((prev) => !prev);
            }}
            className="py-2 w-full hover:bg-black/50 hover:cursor-pointer"
          >
            <Link className="flex items-center justify-between gap-1 px-2">
              <div className="flex items-center gap-1">
                <FaUsers className="h-5 w-5" />
                <h1 className="hidden md:inline">Users</h1>
              </div>
              {!usersDropDown ? (
                <FaChevronDown className="hidden md:inline" />
              ) : (
                <FaChevronUp className="hidden md:inline" />
              )}
            </Link>
          </li>
          {usersDropDown && (
            <div className="ml-3">
              <ul>
                <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
                  <Link
                    to="/admin/users"
                    className="flex items-center gap-1 px-2"
                  >
                    <h1 className="hidden md:inline">Clients</h1>
                  </Link>
                </li>
                <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
                  <Link
                    to="/admin/traders"
                    className="flex items-center gap-1 px-2"
                  >
                    <h1 className="hidden md:inline">Traders</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link
              to="/admin/system/orders"
              className="flex items-center gap-1 px-2"
            >
              <FaShoppingCart className="h-5 w-5" />
              <h1 className="hidden md:inline">Orders</h1>
            </Link>
          </li>
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link
              to="/admin/system/support"
              className="flex items-center gap-1 px-2"
            >
              <MdLocalLibrary className="h-5 w-5" />
              <h1 className="hidden md:inline">Support</h1>
            </Link>
          </li>
          <li className="py-2 w-full hover:bg-black/50 hover:cursor-pointer">
            <Link
              to="/admin/system/reports"
              className="flex items-center gap-1 px-2"
            >
              <HiDocumentDuplicate className="h-5 w-5" />
              <h1 className="hidden md:inline">Reports</h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

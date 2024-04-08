import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/userSlice";

export default function AdminHeader() {
  const { user } = useSelector((state) => state.user);
  const [openMobile, setOpenMobile] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [logOutError, setLogOutError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (data.success === false) {
        setLogOutError(data.message);
        return;
      }
      if (res.ok) {
        dispatch(logoutUser());
      }
    } catch (error) {
      setLogOutError(error);
      console.log(error);
    }
  };
  return (
    <>
      <header className="flex items-center justify-between bg-appRed text-white w-full p-3 min-h-12 relative">
        <Link
          to="/admin/dashboard"
          className="text-lg md:text-2xl font-semibold tracking-wide shadow-gray-100"
        >
          PRI<span className="text-appYellow font-bold">ME</span>PICK
        </Link>

        <div
          onClick={() => setDropDown((prev) => !prev)}
          className="cursor-pointer h-14 w-14 rounded-full hidden md:flex items-center justify-center"
        >
          <div className="flex flex-col">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              alt="user avatar"
              className="object-cover h-12 w-12 rounded-full"
            />
          </div>
        </div>

        <button
          onClick={() => setOpenMobile((prev) => !prev)}
          className="flex items-center py-3 px-3 md:hidden"
        >
          <GiHamburgerMenu className="h-5 w-5" />
        </button>

        {/* dropdown */}
        {dropDown && (
          <div className="absolute w-[200px] z-10 bg-white right-5 top-16 shadow-md hidden md:inline">
            <nav className="text-black">
              <ul className="flex flex-col">
                <li className="p-2 hover:bg-appRed hover:text-white transition-all duration-500 cursor-pointer">
                  <Link className="flex items-center gap-2">
                    <IoSettings className="h-5 w-5" />
                    Profile
                  </Link>
                </li>
                <li className="p-2 hover:bg-appRed hover:text-white transition-all duration-500 cursor-pointer">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2"
                  >
                    <LuLogOut className="h-5 w-5" />
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {/* mobile menu */}
        {openMobile && (
          <div className="flex flex-col md:hidden bg-appRed absolute top-16 w-full left-0 border-t-2">
            <ul>
              <li className="p-2 w-full hover:bg-black/50 transition-all duration-300">
                <Link className="flex items-center gap-2">
                  <IoSettings className="h-5 w-5" />
                  Profile
                </Link>
              </li>
              <li className="p-2 w-full hover:bg-black/50 transition-all duration-300">
                <Link className="flex items-center gap-2">
                  <IoNotificationsSharp className="h-5 w-5" />
                  Notifications
                </Link>
              </li>
              {user && (
                <li className="p-2 w-full hover:bg-black/50 transition-all duration-300">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2"
                  >
                    <LuLogOut className="h-5 w-5" />
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

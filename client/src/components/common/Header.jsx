import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.user);
  const [tabIndex, setTabIndex] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);

  const initiateNavChange = () => {
    if (window.scrollY >= 20) {
      setTabIndex(true);
    } else {
      setTabIndex(false);
    }
  };
  window.addEventListener("scroll", initiateNavChange);
  return (
    <header
      className={`shadow-lg flex items-center justify-between px-4 py-2 z-50 top-0 sticky transition-all duration-700 bg-white  ${
        tabIndex ? "bg-green-800 text-white" : ""
      }`}
    >
      <h1 className="pl-4">Header</h1>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="py-1 px-3 rounded-2xl bg-green-500 text-white text-sm"
        >
          Shop
        </button>
        <form className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-3xl w-60 md:w-80 focus:outline-none focus:ring-0 px-7 py-1"
          />
          <IoSearchOutline className="absolute top-2 left-2 h-5 w-5" />
        </form>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Return Policy</Link>
            </li>
            <li>
              <Link>Warranty Policy</Link>
            </li>
          </ul>
        </nav>
        {user && (
          <div className="rounded-full cursor-pointer h-12 w-12">
            <img
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              alt="..."
              className="rounded-full object-cover h-12 w-12"
            />
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setToggleMobile((prev) => !prev);
        }}
        className="inline md:hidden pr-1"
      >
        <RxHamburgerMenu className="h-6 w-6" />
      </button>
      {/* mobile */}
      {toggleMobile && (
        <nav className="absolute bg-white w-[95%] top-16 left-0 right-0 mx-auto shadow-xl border-gray-200 md:hidden transition-all duration-300">
          <ul className="flex flex-col p-2 gap-2">
            <li className="py-2 px-2 w-full hover:bg-green-700 hover:text-white transition-all duration-300">
              <Link>Home</Link>
            </li>
            <li className="py-2 px-2 w-full hover:bg-green-700 hover:text-white transition-all duration-300">
              <Link>About</Link>
            </li>
            <li className="py-2 px-2 w-full hover:bg-green-700 hover:text-white transition-all duration-300">
              <Link>Services</Link>
            </li>
            {user && (
              <li className="py-2 px-2 w-full hover:bg-green-700 hover:text-white transition-all duration-300">
                <Link className="flex items-center gap-1">
                  <FaUserCircle className="h-6 w-6" />
                  Profile
                </Link>
              </li>
            )}
            {user && (
              <li className="py-2 px-2 w-full hover:bg-green-700 hover:text-white transition-all duration-300">
                <Link className="flex items-center gap-1">
                  <MdLogout className="h-6 w-6" />
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

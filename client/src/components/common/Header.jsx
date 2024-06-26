import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdLocalLibrary } from "react-icons/md";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { logoutUser } from "../../redux/userSlice";
import { FaRegUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiStackLight } from "react-icons/pi";
import { MdForum } from "react-icons/md";

export default function Header() {
  const { user } = useSelector((state) => state.user);
  const [tabIndex, setTabIndex] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [logOutError, setLogOutError] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  //function to logout
  const logout = async () => {
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

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromURL = urlParams.get("searchTerm");
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
    }
  }, [location.search]);
  return (
    <header
      className={`shadow-lg flex items-center justify-between px-1 md:px-4 py-1 md:py-2 z-50 top-0 sticky min-w-full transition-all duration-700 bg-appRed text-white  ${
        tabIndex ? "bg-green-800 text-white" : ""
      }`}
    >
      <Link to="/" className="md:pl-4 flex md:text-2xl items-center">
        <p className="">P</p>
        <p>RI</p>
        <p className="text-[#EDB518] font-semibold">ME</p>
        <p>PICK</p>
      </Link>

      <div className="flex items-center gap-1">
        <Link
          to="/shop"
          type="button"
          className="hidden md:inline py-2 px-4 rounded-xl  text-white"
        >
          Shop
        </Link>
        <form onSubmit={handleSearch} className="relative md:w-[310px]">
          <input
            type="text"
            id="searchText"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="rounded-3xl focus:outline-none focus:ring-0 px-7 py-1 md:py-2 md:w-[400px] text-black"
          />
          <IoSearchOutline className="absolute top-2 md:top-3 left-2 h-5 w-5 text-neutral-400" />
        </form>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <nav>
          <ul className="flex items-center gap-5 text-lg ml-2">
            <li>
              <Link to="/support" className="flex gap-1 items-center">
                <h2>Help</h2>
                <IoMdHelpCircleOutline className="md:h-7 md:w-6 w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="/wish/list" className="flex gap-1">
                <AiOutlineHeart className="h-6 w-6 text-white" />
                <h2>WishList</h2>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex gap-1">
                <BsCart className="h-6 w-6" />
                <h2>Cart</h2>
              </Link>
            </li>
          </ul>
        </nav>
        {user ? (
          <div
            onClick={() => {
              setOpenDropDown((prev) => !prev);
            }}
            className="rounded-full cursor-pointer h-12 w-12"
          >
            <img
              src={
                user?.profilePicture ||
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt="..."
              className="rounded-full object-cover h-9 w-9"
            />
          </div>
        ) : (
          <Link to="/auth/login" className="flex items-center gap-1">
            <FaRegUser className="h-6 w-6" />
            <h2 className="text-nowrap">Sign in</h2>
          </Link>
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
        <nav className="absolute bg-appRed text-white top-12 left-0 right-0 mx-auto shadow-xl shadow-gray-300 border-gray-200 md:hidden transition-all duration-500 cursor-pointer border-t-2">
          <ul className="flex flex-col gap-2">
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setToggleMobile(false);
                  navigate("/");
                }}
                className="flex items-center gap-1"
              >
                <FaHome className="h-6 w-6" />
                Home
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setToggleMobile(false);
                  navigate("/shop");
                }}
                className="flex items-center gap-1"
              >
                <PiStackLight className="h-6 w-6" />
                Shop
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setToggleMobile(false);
                  navigate("/wish/list");
                }}
                className="flex items-center gap-1"
              >
                <FaRegHeart className="h-6 w-6" />
                Wishlist
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setToggleMobile(false);
                  navigate("/cart");
                }}
                className="flex items-center gap-1"
              >
                <BsCart className="h-6 w-6" />
                Cart
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setToggleMobile(false);
                  navigate("/support");
                }}
                className="flex items-center gap-1"
              >
                <MdLocalLibrary className="h-6 w-6" />
                Support
              </button>
            </li>
            {user && (
              <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
                <button
                  onClick={() => {
                    setToggleMobile(false);
                    navigate("/forum");
                  }}
                  className="flex items-center gap-1"
                >
                  <MdForum className="h-6 w-6" />
                  Forum
                </button>
              </li>
            )}
            {user && (
              <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
                <button
                  onClick={() => {
                    setToggleMobile(false);
                    navigate("/profile");
                  }}
                  className="flex items-center gap-1"
                >
                  <FaUserCircle className="h-6 w-6" />
                  Profile
                </button>
              </li>
            )}
            {user ? (
              <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
                <button onClick={logout} className="flex items-center gap-1">
                  <MdLogout className="h-6 w-6" />
                  Logout
                </button>
              </li>
            ) : (
              <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
                <Link to="/auth/login" className="flex items-center gap-1">
                  <CiLogin className="h-6 w-6" />
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
      {user && openDropDown && (
        <div className="hidden md:inline-block absolute w-[200px] bg-appRed text-white shadow-md right-3 top-20 py-1">
          <div className="absolute h-5 w-5 bg-appRed rotate-45 -top-2 right-5 -z-10"></div>
          <ul>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setOpenDropDown(false);
                  navigate("/profile");
                }}
                className="flex items-center gap-1"
              >
                <FaUserCircle className="h-6 w-6" />
                Profile
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button
                onClick={() => {
                  setOpenDropDown(false);
                  navigate("/forum");
                }}
                className="flex items-center gap-1"
              >
                <MdForum className="h-6 w-6" />
                Forum
              </button>
            </li>
            <li className="py-2 px-2 w-full hover:bg-appBlack hover:text-white transition-all duration-500 cursor-pointer">
              <button onClick={logout} className="flex items-center gap-1">
                <MdLogout className="h-6 w-6" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

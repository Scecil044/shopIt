import { useSelector } from "react-redux";
import ShopCarousel from "../../components/shop/ShopCarousel";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/userSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setEmailError("The email field is required");
    } else {
      setEmailError(false);
    }
    if (!formData.password) {
      setPasswordError("The Password field is required");
      return;
    } else {
      setPasswordError(false);
    }
    try {
      dispatch(loginPendingState());
      setIsLoading(true);
      setIsError(false);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data.message));
        setIsError(data.message);
        setIsLoading(false);
        return;
      }
      dispatch(loginFulfilledState(data));
      navigate("/shop");
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      dispatch(loginRejectedState(error?.message));
      setIsLoading(false);
      setIsError(error?.message);
    }
  };
  return (
    <div className="min-h-screen p-2 text-sm relative">
      <div className="w-[90%] mx-auto">
        <ShopCarousel />
      </div>
      {!user && (
        <div className="w-full flex flex-col gap-1 items-center justify-center my-5 transition-all duration-300">
          <h1>Want to see more personalized options?</h1>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="py-1 px-28 bg-appYellow shadow-md hover:opacity-90 text-sm font-semibold"
          >
            Sign in
          </button>
          <h1>Or</h1>
          <button className="text-blue-600 font-semibold hover:underline transition-all duration-300">
            Continue with Google
          </button>
        </div>
      )}

      {openModal && (
        <form
          onSubmit={handleSubmit}
          className={`bg-white p-5 fixed top-[40%] md:top-[50%] right-3 md:right-10 w-[95%] md:w-[800px] shadow-md  shadow-gray-300 ${
            !openModal ? "-ml-800px" : ""
          } transition-all duration-1000`}
        >
          <div className="font-semibold flex gap-2 text-lg md:text-xl">
            Welcome to{" "}
            <span className="flex items-center">
              <h1>Pri</h1> <h1 className="text-appYellow font-bold">me</h1>
              <h1>pick</h1>
            </span>
          </div>
          {/* body */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-[50%] flex gap-5 items-center">
              <img
                src="/user.png"
                alt="avatar"
                className="object-cover h-24 w-24 rounded-full my-2"
              />
              <div>
                <p>By continuing, you agree to Primepicks</p>
                <Link className="text-blue-700 font-semibold hover:underline transition-all duration-300">
                  Terms of service and usage
                </Link>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <span className="text-lg italic flex items-center gap-2">
                Login to Your account Or{" "}
                <button className="text-blue-700 hover:underline transition-all duration-500">
                  Sign Up
                </button>
              </span>
              <div className="flex flex-col">
                <label className="text-sm">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                  className="w-full py-1 px-2 focus:outline-none focus:ring-0 text-sm"
                />
                {emailError && !formData.email && (
                  <span className="text-red-600 text-xs">{emailError}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                  className="w-full py-1 px-2 focus:outline-none focus:ring-0 text-sm"
                />
                {passwordError && !formData.password && (
                  <span className="text-red-600 text-xs">{passwordError}</span>
                )}
              </div>
            </div>
          </div>
          {/* modal footer */}
          <div className="flex float-end items-center gap-2 mt-5">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="py-1 md:py-2 px-6 text-white bg-appRed shadow-md hover:shadow-none transition-all duration-500 hover:opacity-90"
            >
              Cancel
            </button>
            <button className="flex items-center justify-center gap-2 py-1 md:py-2 px-6 bg-appBlack text-white shadow-md hover:shadow-none transition-all duration-500 hover:opacity-90">
              {isLoading && (
                <div className="h-5 w-5 rounded-full border-r-2 border-b-2 border-white animate-spin"></div>
              )}
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

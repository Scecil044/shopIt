import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/userSlice";
import Register from "./Register";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const [formData, setFormData] = useState({});
  // function to login user
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
      navigate("/");
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      dispatch(loginRejectedState(error?.message));
      setIsLoading(false);
      setIsError(error?.message);
    }
  };
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-white text-sm">
      <div className="w-full md:w-[450px]">
        <form
          onSubmit={handleSubmit}
          className="w-[350px] mx-auto p-5 shadow-2xl bg-white flex flex-col gap-4"
        >
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="font-semibold">
              PRIMEPICK
            </Link>
          </div>
          <span className="text-gray-400 text-lg">Login to your account</span>
          {isError && <div>{isError}</div>}
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
          <button
            disabled={isLoading}
            className="text-white bg-appRed py-1 w-full shadow-md mb-1 flex items-center justify-center gap-2 disabled:cursor-not-allowed hover:opacity-90"
          >
            {isLoading && (
              <div className="h-5 w-5 rounded-full border-r-2 border-b-2 border-white animate-spin"></div>
            )}
            Login
          </button>
          <button type="button">Continue with google</button>

          <span className="text-xs">
            Continuing means you agree with AIRTEs{" "}
            <Link className="text-blue-500">Terms of service and use</Link>
          </span>

          <span className="text-[13px]">
            Want to sell on ShopIt?{" "}
            <Link className="text-blue-500 font-semibold hover:underline">
              Buy for business
            </Link>
          </span>
        </form>
        <div className="flex items-center justify-center mt-5 flex-col">
          <div className="flex gap-1 flex-col">
            <button
              onClick={() => setOpenRegister(true)}
              className="shadow-lg hover:shadow-xl py-1 px-6 bg-white rounded-sm mt-1 w-[350px]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {openRegister && <Register />}
    </div>
  );
}

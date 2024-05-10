import { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import useUsers from "../../hooks/useUsers";
import Oauth from "../../components/oauth/Oauth";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { isLoading, isError, authenticateUser } = useUsers();
  const [role, setRole] = useState(null);

  const [formData, setFormData] = useState({});
  // function to login user
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
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
    authenticateUser(formData);
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
              <div>
                PRI<span className="text-appYellow font-bold">ME</span>PICK
              </div>
            </Link>
          </div>
          <span className="text-gray-400 text-lg">Login to your account</span>
          {isError && (
            <div className="text-white bg-red-600 px-2">{isError}</div>
          )}
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
            className="text-white bg-yellow-400 py-1 w-full shadow-md mb-1 flex items-center justify-center gap-2 disabled:cursor-not-allowed hover:opacity-90"
          >
            {isLoading && (
              <div className="h-5 w-5 rounded-full border-r-2 border-b-2 border-white animate-spin"></div>
            )}
            Login
          </button>
          <Oauth />

          <span className="text-xs">
            Continuing means you agree with AIRTEs{" "}
            <Link className="text-blue-500">Terms of service and use</Link>
          </span>

          <span className="text-[13px]">
            Want to sell on ShopIt?{" "}
            <button
              onClick={() => {
                setOpenRegister(true);
                setRole(2);
              }}
              className="text-blue-500 font-semibold hover:underline"
            >
              Buy for business
            </button>
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
      <img src="/trolley.png" alt="trolley" className="hidden md:inline" />

      {openRegister && (
        <Register role={role} setOpenRegister={setOpenRegister} />
      )}
    </div>
  );
}

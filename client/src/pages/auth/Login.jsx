import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
    } else {
      setPasswordError(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-white">
      <div className="w-full md:w-[450px]">
        <form
          onSubmit={handleSubmit}
          className="w-[350px] mx-auto p-5 shadow-2xl bg-white flex flex-col gap-4"
        >
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="font-semibold">
              ShopIt
            </Link>
          </div>
          <span className="text-gray-400 text-lg">Login to your account</span>
          <div className="flex flex-col">
            <label className="text-sm">Email</label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className="w-full py-1 px-2 focus:outline-none focus:ring-0"
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
              className="w-full py-1 px-2 focus:outline-none focus:ring-0"
            />
            {passwordError && !formData.password && (
              <span className="text-red-600 text-xs">{passwordError}</span>
            )}
          </div>
          <button
            disabled={isLoading}
            className="text-white bg-primary py-1 w-full shadow-md mb-1 flex items-center justify-center gap-2 disabled:cursor-not-allowed hover:opacity-90"
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
          <h5 className="text-sm text-gray-500">New to AIRTEA?</h5>
          <div className="flex gap-1 flex-col">
            <button className="shadow-lg hover:shadow-xl py-1 px-6 bg-white rounded-sm mt-1 w-[350px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

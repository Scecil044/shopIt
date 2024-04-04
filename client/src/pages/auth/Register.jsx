import { useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";

export default function Register({ setOpenRegister }) {
  const [formData, setFormData] = useState({});
  const [selectedRole, setSelectedRole] = useState(1);

  const handleRegister = (e) => {
    e.preventDefault();
    setOpenRegister(false);
  };

  return (
    <div className="inset-0 fixed w-full h-full bg-black/50 flex items-center">
      <div className="bg-white p-5 absolute right-0 z-50 w-[80%] md:w-[30%] mr-2 md:mr-5">
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="font-semibold flex gap-2 text-lg md:text-xl">
              Welcome to{" "}
              <span className="flex items-center">
                <h1>Pri</h1> <h1 className="text-appYellow font-bold">me</h1>
                <h1>pick</h1>
              </span>
            </div>
            <button onClick={() => setOpenRegister(false)}>
              <IoIosClose className="h-5 w-5" />
            </button>
          </div>
          <div>
            <h1 className="italic font-semibold">Lets Sign you up!</h1>
          </div>

          <div className="flex gap-4">
            <div
              onClick={() => {
                setSelectedRole(2);
              }}
              className={`border cursor-pointer ${
                selectedRole === 2
                  ? "border-gray-500 border-2"
                  : "border-gray-400"
              }  flex gap-2 transition-all duration-300 flex-1 items-center justify-center p-5`}
            >
              <h1>Business</h1>
              {selectedRole === 2 && (
                <div
                  className={`rounded-full flex items-center justify-center h-3 w-3 bg-appRed text-white`}
                >
                  <TiTick className="h-2 w-2" />
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setSelectedRole(1);
              }}
              className={`border cursor-pointer ${
                selectedRole === 1
                  ? "border-gray-500 border-2"
                  : "border-gray-400"
              }  flex gap-2 transition-all duration-300 flex-1 items-center justify-center p-5`}
            >
              <h1>Customer</h1>
              {selectedRole === 1 && (
                <div
                  className={`rounded-full flex items-center justify-center h-3 w-3 bg-appRed text-white`}
                >
                  <TiTick className="h-2 w-2" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <span className="flex">
                <label>First Name</label>
                <LuAsterisk className="h-2 w-2 text-red-600" />
              </span>
            </div>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <span className="flex">
                <label>Last Name</label>
                <LuAsterisk className="h-2 w-2 text-red-600" />
              </span>
            </div>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <span className="flex">
                <label>Email</label>
                <LuAsterisk className="h-2 w-2 text-red-600" />
              </span>
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <span className="flex">
                <label>Password</label>
                <LuAsterisk className="h-2 w-2 text-red-600" />
              </span>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div>
              <span className="flex">
                <label>Confirm Password</label>
                <LuAsterisk className="h-2 w-2 text-red-600" />
              </span>
            </div>
            <input
              type="password"
              id="passwordConfirmation"
              placeholder="Confirm Password"
              className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
            />
          </div>
          <div>
            <button className="w-full flex items-center justify-center py-1 bg-appRed text-white shadow-md">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

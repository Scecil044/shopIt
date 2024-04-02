import { useState } from "react";

export default function CreateUserModal({
  openCreateModal,
  setOpenCreateModal,
}) {
  const [formData, setFormData] = useState({});
  return (
    <div className="fixed flex inset-0 items-center h-full w-full justify-center bg-black/50 text-xs">
      <div className="p-5 bg-white w-[80%] md:w-[55%] ml-8 md:ml-0">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Create User</h1>
        </div>
        {/* modal body */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 my-2">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Role</label>
            <select
              id="role"
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            >
              <option value="">Select</option>
              <option value="">Admin</option>
              <option value="">Trader</option>
              <option value="">Buyer</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  passwordConfirmation: e.target.value,
                })
              }
              className="py-1 px-2 border border-gray-400 focus:ring-0 focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* footer */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpenCreateModal(false)}
            className="py-1 px-4 bg-pink-800 text-white focus:opacity-90 transition-all duration-300 shadow-md hover:shadow-sm flex items-center justify-center gap-1"
          >
            Cancel
          </button>
          <button className="py-1 px-4 bg-[#1c702c] text-white focus:opacity-90 transition-all duration-300 shadow-md hover:shadow-sm flex items-center justify-center gap-1">
            <div className="rounded-full animate-spin border-b-2 border-r-2 border-white h-4 w-4"></div>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ComponentLoader from "../../components/admin/ComponentLoader";
import { TiUserAdd } from "react-icons/ti";
import CreateUserModal from "../../components/modals/CreateUserModal";
import DeleteModal from "../../components/common/DeleteModal";
import { Alert } from "flowbite-react";
import useUsers from "../../hooks/useUsers";
import { useSelector } from "react-redux";

const mock = [
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
  {
    name: "Spencer Cecil",
    email: "scecil072@gmail.com",
    role: "Admin",
    phone: "0788989890",
    joined: "12/02/2020",
    createdBy: "Kelvin Brian",
  },
];
export default function Users() {
  const { user } = useSelector((state) => state.user);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);
  const { isLoading, isError, users, getUsers } = useUsers();
  const [searchTerm, setSearchTerm] = useState("customer");
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (trader) =>
      trader.firstName.toLowerCase().includes(search.toLowerCase()) ||
      trader.lastName.toLowerCase().includes(search.toLowerCase()) ||
      trader.email.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    getUsers(searchTerm);
  }, [openDeleteModal, openCreateModal]);

  return (
    <>
      <div className="mb-2">
        <span className="flex items-center text-neutral-400 font-bold">
          <h1>Admin</h1>
          <h1 className="p-1">/</h1>
          <h1>Users</h1>
        </span>
      </div>
      <Alert color="warning" withBorderAccent>
        <span>
          <span className="font-medium">Module alert!</span> This module shows
          all users registered in the system
        </span>
      </Alert>

      <div className="bg-white shadow-md p-5 w-full shadow-gray-300 text-sm">
        <div className="flex items-center justify-between gap-5">
          <button
            onClick={() => setOpenCreateModal(true)}
            className="flex items-center flex-nowrap justify-center gap-1 py-1 px-5 bg-pink-800 text-white shadow-md transition-all duration-300 hover:shadow-none hover:bg-pink-700"
          >
            <TiUserAdd className="h-5 w-5" />
            <h1 className="text-nowrap">Create User</h1>
          </button>
          <div className="float-end my-1">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-1 px-2 focus:outline-none focus:ring-0 border border-gray-300 focus:border-gray-400"
            />
          </div>
        </div>
        <div className="overflow-x-auto table-auto w-full no-scrollbar">
          <table className="w-full text-sm">
            <thead>
              <tr className="uppercase bg-gray-200">
                <th className="text-nowrap text-left border-t-2 p-1">No.</th>
                <th className="text-nowrap text-left border-t-2 p-1">Avatar</th>
                <th className="text-nowrap text-left border-t-2 p-1">Name</th>
                <th className="text-nowrap text-left border-t-2 p-1">Email</th>
                <th className="text-nowrap text-left border-t-2 p-1">Phone</th>
                <th className="text-nowrap text-left border-t-2 p-1">Role</th>
                <th className="text-nowrap text-left border-t-2 p-1">Joined</th>
                <th className="text-nowrap text-left border-t-2 p-1">
                  Created By
                </th>
                <th className="text-nowrap text-left border-t-2 p-1">Action</th>
              </tr>
            </thead>
            {filteredUsers?.length < 1 ? (
              <tbody>
                <tr>
                  <td colSpan={9}>
                    <div className="w-full text-center mt-2">
                      <h1>No data to display yet...</h1>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filteredUsers?.map((user, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 1 ? "bg-gray-200" : ""}`}
                  >
                    <td className="px-2 py-1">{(index += 1)}</td>
                    <td className="px-2 py-1">
                      <img
                        src={user?.profilePicture}
                        alt="avatar"
                        className="h-10 w-10"
                      />
                    </td>
                    <td className="px-2 py-1">
                      {" "}
                      {user?.firstName + " " + user?.lastName}
                    </td>
                    <td className="px-2 py-1">{user?.email}</td>
                    <td className="px-2 py-1">{user?.phone}</td>
                    <td className="px-2 py-1">{user?.role}</td>
                    <td className="px-2 py-1">
                      {" "}
                      {user.createdAt
                        ? new Date(user?.createdAt).toLocaleString("en-us")
                        : ""}
                    </td>
                    <td className="px-2 py-1">System Admin</td>
                    <td className="px-2 py-1 flex gap-2">
                      <Link
                        to={`/admin/profile/${user?._id}`}
                        className="flex items-center gap-1 mt-2"
                      >
                        <FaEye className="h-4 w-4 text-blue-600" />
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setOpenDeleteModal(true);
                          setSelectedUser(user?._id);
                        }}
                        className="flex items-center gap-1 mt-2"
                      >
                        <MdDelete className="h-4 w-4 text-red-600" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      {isLoading && <ComponentLoader />}
      {openCreateModal && (
        <CreateUserModal
          openCreateModal={openCreateModal}
          setOpenCreateModal={setOpenCreateModal}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          selectedUser={selectedUser}
          role="deleteUser"
        />
      )}
    </>
  );
}

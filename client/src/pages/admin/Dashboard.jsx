import { Alert } from "flowbite-react";
import { useEffect, useState } from "react";
import AdminLoader from "../../components/admin/AdminLoader";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

const mock = [
  {
    firstName: "Spencer",
    lastName: "Cecil",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  {
    firstName: "Julio",
    lastName: "Enciso",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  {
    firstName: "Mark",
    lastName: "Donald",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  {
    firstName: "Mark",
    lastName: "Donald",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  {
    firstName: "Mark",
    lastName: "Donald",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
  {
    firstName: "Mark",
    lastName: "Donald",
    email: "scecil072@gmail.com",
    phone: "0722467392",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  },
];
export default function Dashboard() {
  const { getUsers, users, isLoading } = useUsers();
  const [openInfo, setOpenInfo] = useState(true);
  const [usersCount, setUsersCount] = useState(0);
  const [fulfilledOrders, setFulfilledOrders] = useState(0);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
  const traders = users.filter((trader) => trader?.role === "trader");
  const actualTradersCount = traders.length;
  const actualUsersCount = users?.length; // Replace 100 with the actual number of users from your system
  const actualFulfilledOrdersCount = 300; // Replace 100 with the actual number of fulfilled orders from your system
  const actualPendingOrdersCount = 78; // Replace 100 with the actual number of cancelled orders from your system

  useEffect(() => {
    getUsers({});

    const interval = setInterval(() => {
      setUsersCount((prevCount) => {
        const increment = Math.ceil(actualUsersCount / 100); // Adjust the increment based on your preference
        const nextCount = prevCount + increment;
        return nextCount >= actualUsersCount ? actualUsersCount : nextCount;
      });
      setFulfilledOrders((prev) => {
        const fulfilledIncrement = Math.ceil(actualFulfilledOrdersCount / 100);
        const nextFulfilledCount = prev + fulfilledIncrement;
        return nextFulfilledCount >= actualFulfilledOrdersCount
          ? actualFulfilledOrdersCount
          : nextFulfilledCount;
      });
      setPendingOrdersCount((prev) => {
        const pendingIncrement = Math.ceil(actualPendingOrdersCount / 100);
        const nextPendingCount = prev + pendingIncrement;
        return nextPendingCount >= actualPendingOrdersCount
          ? actualPendingOrdersCount
          : nextPendingCount;
      });
    }, 50); // Adjust the interval time based on your preference

    return () => clearInterval(interval);
  }, [actualUsersCount]);

  return (
    <div className="min-h-screen">
      {openInfo && (
        <div className="hidden md:inline w-full">
          <Alert
            color="warning"
            onDismiss={() => setOpenInfo(false)}
            withBorderAccent
          >
            <span>
              <span className="font-medium">Module info!</span> Welcome to
              AIRTEA dashboard. This module provides the health of your
              application at a glimpse
            </span>
          </Alert>
        </div>
      )}
      <div className="flex flex-col gap-3 items-start mt-5">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-1 bg-white p-2 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="shadow-lg p-2 flex gap-3 bg-red-800 text-white items-center">
                <h1 className="text-sm font-semibold">Fulfilled Orders</h1>
                <div className="border-l-2 p-5">
                  <span className="flex items-center gap-1">
                    <h1 className="font-semibold text-3xl">
                      {fulfilledOrders}
                    </h1>
                  </span>
                </div>
              </div>
              <div className="shadow-lg p-2 flex gap-3 bg-black text-white items-center">
                <h1 className="text-sm font-semibold">Pending Deliveries</h1>
                <div className="border-l-2 p-5">
                  <span className="flex items-center gap-1">
                    <h1 className="font-semibold text-3xl">
                      {pendingOrdersCount}
                    </h1>
                  </span>
                </div>
              </div>
              <Link
                to="/admin/users"
                className="shadow-lg p-2 flex gap-3 bg-green-900 text-white items-center"
              >
                <h1 className="text-sm font-semibold">System Users</h1>
                <div className="border-l-2 p-5">
                  <span className="flex items-center gap-1">
                    <h1 className="font-semibold text-3xl">{usersCount}</h1>
                  </span>
                </div>
              </Link>

              <Link
                to="/admin/traders"
                className="shadow-lg p-2 flex gap-3 bg-indigo-900 text-white items-center"
              >
                <h1 className="text-sm font-semibold">System Traders</h1>
                <div className="border-l-2 p-5">
                  <span className="flex items-center gap-1">
                    <h1 className="font-semibold text-3xl">
                      {actualTradersCount}
                    </h1>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full items-start">
          <div className="flex-1 bg-white p-2 shadow-xl flex gap-5 items-start">
            <div>
              <h1 className="text-sm font-semibold">Transactions</h1>
              {/* <Transactions /> */}
            </div>
            <div className="hidden md:inline p-5 bg-green-50">
              <p className="text-xs">
                This is a glimpse of all the transactions processed within the
                last 6 months. Additional analytics can be found on the finance
                tab on your left sidebar
              </p>
            </div>
          </div>
          <div className="w-full md:w-[300px] bg-white p-2 shadow-xl">
            <h1 className="text-sm font-semibold">
              <h1>Data</h1>
              {/* <Registrations /> */}
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full items-start">
          <div className="w-full md:w-[300px] bg-white p-2 shadow-xl">
            <h1 className="text-sm font-semibold">
              <h1>Data</h1>
              {/* <Registrations /> */}
            </h1>
          </div>
          <div className="flex-1 bg-white p-2 shadow-xl">
            <h1 className="text-sm font-semibold">Users</h1>
            <table className="w-full">
              <thead className="uppercase bg-gray-300 text-sm">
                <tr className="text-left">
                  <th className="border-b-2 border-gray-300">No.</th>
                  <th className="border-b-2 border-gray-300">Image</th>
                  <th className="border-b-2 border-gray-300"> name</th>
                  <th className="border-b-2 border-gray-300">email</th>
                  <th className="border-b-2 border-gray-300">Phone</th>
                  <th className="border-b-2 border-gray-300">Rights</th>
                  <th className="border-b-2 border-gray-300 text-nowrap">
                    Created By
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 == 1 ? "bg-gray-200" : ""}
                  >
                    <td>{(index += 1)}</td>
                    <td>
                      <img
                        src={user?.profilePicture}
                        alt="..."
                        className="rounded-full h-8 w-8"
                      />
                    </td>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="flex items-start items-center justify-center">
                      {user?.role === "customer" ? (
                        <>
                          <div className="px-1 py-0.5 bg-appYellow rounded-2xl flex items-center justify-center">
                            Customer
                          </div>
                        </>
                      ) : user?.role === "trader" ? (
                        <>
                          <div className="px-4 py-0.5 bg-emerald-500 rounded-2xl flex items-center justify-center">
                            Trader
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>System Admin</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full items-start">
          <div className="w-full flex-1 bg-white p-2 shadow-xl">
            <h1 className="text-sm font-semibold">Cancelled Orders</h1>
            {/* <CancelledOrders /> */}
          </div>
          <div className="flex-1 bg-white p-2 shadow-xl">
            <h1 className="text-sm font-semibold">Refunds</h1>
            {/* <Refunds /> */}
          </div>
        </div>
      </div>
      {isLoading && <AdminLoader />}
    </div>
  );
}

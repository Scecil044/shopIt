import { LuAsterisk } from "react-icons/lu";
import { Link, Navigate } from "react-router-dom";
import ComponentLoader from "../../components/admin/ComponentLoader";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  return user ? (
    <>
      <div className="min-h-screen">
        <div className="md:h-60 h-48 bg-gradient-to-tr from-appBlue to-appRed relative">
          <div className="md:h-60 h-56 overflow-hidden flex absolute top-16 md:top-2">
            <img
              src="/cart.png"
              alt="customer care"
              className="object-cover h-3/5 md:h-full"
            />
          </div>
        </div>
        <nav className="flex items-center shadow-md">
          <ul className="flex items-center">
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Account</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Orders</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Vouchers</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>History</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Saved</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Recalls</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Reviews</Link>
            </li>
            <li className="py-2 px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Inbox</Link>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col-reverse md:flex-row gap-3 max-w-7xl mx-auto mt-2">
          <section className=" flex flex-1 flex-col gap-3 p-3">
            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Account Name</label>
                </span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
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
                  <label>Country</label>
                  <LuAsterisk className="h-2 w-2 text-red-600" />
                </span>
              </div>
              <input
                type="text"
                id="country"
                placeholder="Country"
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>City</label>
                  <LuAsterisk className="h-2 w-2 text-red-600" />
                </span>
              </div>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Address</label>
                  <LuAsterisk className="h-2 w-2 text-red-600" />
                </span>
              </div>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Landmark</label>
                  <LuAsterisk className="h-2 w-2 text-red-600" />
                </span>
              </div>
              <input
                type="text"
                id="landmark"
                placeholder="Landmark"
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
            </div>
            <div className="mb-3">
              <button className="shadow-md hover:shadow-none transition-all duration-300 hover:opacity-90 w-full flex items-center justify-center bg-appYellow text-black py-1">
                Update
              </button>
            </div>
          </section>
          <section className="flex-1 flex flex-col gap-3 p-3">
            <div>
              <h1>Account Summary</h1>
            </div>
            <div className="flex flex-col gap-1 bg-gray-200 shadow-md w-full md:w-1/2 p-3 text-sm">
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold">Account Name</h1>
                <h1>Not Specified</h1>
              </span>
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold">User Name</h1>
                <h1>Spencer Cecil</h1>
              </span>
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold">Email</h1>
                <h1>example@gmail.com</h1>
              </span>
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold">Joined</h1>
                <h1>21/01/2019</h1>
              </span>
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold">Address</h1>
                <h1>Nairobi, Kenya, 4045-00100</h1>
              </span>
              <span className="flex items-center gap-2 justify-between">
                <h1 className="font-semibold"></h1>
                <h1>Client</h1>
              </span>
            </div>
          </section>
        </main>

        <ComponentLoader />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

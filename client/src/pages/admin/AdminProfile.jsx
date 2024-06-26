import { useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import ComponentLoader from "../../components/admin/ComponentLoader";
import { useEffect, useState } from "react";
import { LuAsterisk } from "react-icons/lu";
import { useToast } from "@chakra-ui/react";

export default function AdminProfile() {
  const toast = useToast();
  const { user, isLoading, getUser, setUser, setIsLoading, setIsError } =
    useUsers();
  const params = useParams();
  const [formData, setFormData] = useState({});

  const updateUserDetails = async () => {
    try {
      const res = await fetch(`/api/users/${params.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setIsError(data.message);
        setIsLoading(false);
        toast({
          title: "Oops, something went wrong.",
          description: data?.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      if (data.success !== false) {
        setUser(data);
        setIsLoading(false);
        setIsError(false);
        toast({
          title: "Details Updated.",
          description: "Your details have been captured.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        getUser(params.id);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
      toast({
        title: "Registration successful.",
        description: error?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    getUser(params.id);
  }, [params.id]);

  return (
    <>
      <div className="md:h-40 h-32 bg-gradient-to-tr from-appBlue to-appRed relative">
        <div className="rounded-full h-20 w-20 absolute border-2 border-white flex items-center justify-center -bottom-10 left-2">
          <img
            src={user?.profilePicture}
            alt="avatar"
            className="rounded-full h-2- w-20"
          />
        </div>
      </div>
      <div className="bg-white p-5 my-2">
        <form
          onSubmit={updateUserDetails}
          className="flex flex-col-reverse md:flex-row gap-3 max-w-7xl mx-auto mt-2"
        >
          <section className=" flex flex-1 flex-col gap-3 p-3">
            {user?.role === "trader" && (
              <div className="flex flex-col gap-1">
                <div>
                  <span className="flex">
                    <label>Business Name</label>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={
                    user?.role === "trader"
                      ? user?.businessRef?.businessName
                      : ""
                  }
                  className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 bg-gray-200 font-bold"
                />
              </div>
            )}

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
                defaultValue={user?.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
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
                defaultValue={user?.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
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
                defaultValue={user?.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                defaultValue={user?.country || "Kenya"}
                disabled
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
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
                defaultValue={user?.businessRef?.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
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
                defaultValue={user?.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
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
                defaultValue={user?.landMark}
                onChange={(e) =>
                  setFormData({ ...formData, landMark: e.target.value })
                }
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
            <div className="flex">
              <div className="flex flex-col gap-1 bg-gray-200 shadow-md w-full md:w-1/2 p-3 text-sm">
                {user.role === "trader" && (
                  <span className="flex items-center gap-2 justify-between">
                    <h1 className="font-semibold">Business Name</h1>
                    <h1 className="font-semibold">
                      {user?.businessRef?.businessName}
                    </h1>
                  </span>
                )}
                <span className="flex items-center gap-2 justify-between">
                  <h1 className="font-semibold">User Name</h1>
                  <h1 className="text-nowrap">
                    {user?.firstName + " " + user?.lastName}
                  </h1>
                </span>
                <span className="flex items-center gap-2 justify-between">
                  <h1 className="font-semibold">Email</h1>
                  <h1>{user?.email}</h1>
                </span>
                <span className="flex items-center gap-2 justify-between">
                  <h1 className="font-semibold">Joined</h1>
                  <h1>{user?.createdAt}</h1>
                </span>
                <span className="flex items-center gap-2 justify-between">
                  <h1 className="font-semibold">Address</h1>
                  <h1>{user?.address}</h1>
                </span>
                <span className="flex items-center gap-2 justify-between">
                  <h1 className="font-semibold"></h1>
                  <h1>{user?.role}</h1>
                </span>
              </div>
              <div className="hidden md:inline">
                <img
                  src={
                    user?.role === "trader"
                      ? user?.businessRef?.logo
                      : user?.role === "customer" || user?.role === "admin"
                      ? user?.profilePicture
                      : ""
                  }
                  alt="business logo"
                  className="rounded-full h-40 w-40 "
                />
              </div>
            </div>
          </section>
        </form>
      </div>

      {isLoading && <ComponentLoader />}
    </>
  );
}

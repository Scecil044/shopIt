import { LuAsterisk } from "react-icons/lu";
import { Link, Navigate } from "react-router-dom";
import ComponentLoader from "../../components/admin/ComponentLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/userSlice";
import { useToast } from "@chakra-ui/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const fileRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginPendingState());
      setIsLoading(true);
      const res = await fetch(`/api/users/${user?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          body: JSON.stringify(formData),
        },
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data?.message));
        setIsLoading(false);
        return;
      }
      if (res.ok) {
        dispatch(loginFulfilledState(data));
        setIsLoading(false);
        toast({
          title: "Details Updated.",
          description: "Your details have been captured.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      const uploadImage = async () => {
        const fileName = new Date().getTime() + selectedImage.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, selectedImage);

        uploadTask.on(
          "status_changes",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress.toFixed(0));
          },
          (error) => {
            console.log(error);
            setIsLoading(false);
            setUploadError(error);
          },
          () =>
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFormData({ ...formData, profilePicture: downloadURL });
              setIsLoading(false);
              setUploadError(false);
            })
        );
      };

      uploadImage();
    }
  }, [selectedImage]);
  console.log(formData)
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
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Account</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Orders</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Vouchers</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>History</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Saved</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Recalls</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Reviews</Link>
            </li>
            <li className="py-2 px-2 md:px-6 hover:bg-appRed hover:text-white transition-all duration-500">
              <Link>Inbox</Link>
            </li>
          </ul>
        </nav>
        <form
          onSubmit={updateUser}
          className="flex flex-col-reverse md:flex-row gap-3 max-w-7xl mx-auto mt-2"
        >
          <section className=" flex flex-1 flex-col gap-3 p-3">
            {user?.role === "trader" && (
              <div className="flex flex-col gap-1">
                <div>
                  <span className="flex">
                    <label>Account Name</label>
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
                  className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
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
                defaultValue={user?.city}
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
                    <h1 className="font-semibold">Account Name</h1>
                    <h1>{user?.businessRef?.businessName}</h1>
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
                      : user?.role === "customer"
                      ? user?.profilePicture
                      : ""
                  }
                  alt="business logo"
                  className="rounded-full h-40 w-40 "
                  onClick={() => fileRef.current.click()}
                />
                <input
                  type="file"
                  className="hidden"
                  id="pic"
                  accept="image/*"
                  ref={fileRef}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </div>
            </div>
          </section>
        </form>

        {isLoading && <ComponentLoader />}
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

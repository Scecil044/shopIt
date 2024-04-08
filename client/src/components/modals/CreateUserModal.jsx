import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { LuAsterisk } from "react-icons/lu";
import ComponentLoader from "../admin/ComponentLoader";

export default function CreateUserModal({
  openCreateModal,
  setOpenCreateModal,
}) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [businessNameError, setBusinessNameError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [landMarkError, setLandMarkError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false);

  const handlePhoneInput = (e) => {
    const inputValue = e.target.value;
    const isValid = /^\+\d{12}$/.test(inputValue);
    if (isValid) {
      setFormData({ ...formData, phone: inputValue });
    } else {
      setPhoneError("Invalid Phone Number");
    }
  };
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setEmailError("The email field is required!");
    } else {
      setEmailError(false);
    }
    if (!formData.firstName) {
      setFirstNameError("The first name field is required!");
    } else {
      setFirstNameError(false);
    }
    if (!formData.lastName) {
      setLastNameError("The last name field is required!");
    } else {
      setLastNameError(false);
    }
    if (!formData.city) {
      setCityError("The City field is required!");
    } else {
      setCityError(false);
    }
    if (!formData.gender) {
      setGenderError("The gender field is required!");
    } else {
      setGenderError(false);
    }
    if (!formData.address) {
      setAddressError("The address field is required!");
    } else {
      setAddressError(false);
    }
    if (!formData.landMark) {
      setLandMarkError("The landmark field is required!");
    } else {
      setLandMarkError(false);
    }
    if (!formData.phone) {
      setPhoneError("The phone field is required!");
    } else {
      setPhoneError(false);
    }
    if (!formData.role) {
      setRoleError("The role field is required!");
    } else {
      setRoleError(false);
    }
    if (!formData.password) {
      setPasswordError("The password field is required!");
    } else {
      setPasswordError(false);
    }
    if (formData.password !== formData.passwordConfirmation) {
      setPasswordConfirmationError("Passwords did not match!!");
      return;
    } else {
      setPasswordConfirmationError(false);
    }
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setIsLoading(false);
        setIsError(data?.message);
        toast({
          title: "Oops! something went wrong.",
          description: data?.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      if (data.success !== false) {
        setIsLoading(false);
        setIsError(false);
        toast({
          title: "Registration successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        setOpenCreateModal(false);
      }
    } catch (error) {
      setIsError(error?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed flex inset-0 items-center h-full w-full justify-center bg-black/50 text-xs">
      <div className="inset-0 fixed bg-black/50 w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 w-[80%] md:w-[60%] text-sm md:ml-20"
        >
          <div className="flex items-center justify-between mb-1">
            <h1 className="font-bold text-lg">Create User</h1>
            <button type="button" onClick={() => setOpenCreateModal(false)}>
              <IoIosClose className="h-5 h w-5" />
            </button>
          </div>
          {/* modal body */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>First Name</label>
                  {firstNameError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  firstNameError ? "border border-red-700" : ""
                }`}
              />
              {firstNameError && !formData.firstName && (
                <small className="text-red-600 font-semibold">
                  {firstNameError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Last Name</label>
                  {lastNameError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  lastNameError ? "border border-red-700" : ""
                }`}
              />
              {lastNameError && !formData.lastName && (
                <small className="text-red-600 font-semibold">
                  {lastNameError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Email</label>
                  {emailError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  emailError ? "border border-red-700" : ""
                }`}
              />
              {emailError && !formData.email && (
                <small className="text-red-600 font-semibold">
                  {emailError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>City</label>
                  {cityError && <LuAsterisk className="h-2 w-2 text-red-600" />}
                </span>
              </div>
              <input
                type="text"
                id="city"
                placeholder="City"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  cityError ? "border border-red-700" : ""
                }`}
              />
              {cityError && !formData.city && (
                <small className="text-red-600 font-semibold">
                  {cityError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Gender</label>
                  {genderError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <select
                id="gender"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  genderError ? "border border-red-700" : ""
                }`}
              >
                <option value="">Select</option>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
              {genderError && !formData.gender && (
                <small className="text-red-600 font-semibold">
                  {genderError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Role</label>
              <select
                id="role"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  roleError ? "border border-red-700" : ""
                }`}
              >
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="customer">Client</option>
              </select>
              {roleError && !formData.role && (
                <small className="text-red-600 font-semibold">
                  {roleError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Address</label>
                  {addressError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="text"
                id="address"
                placeholder="Address"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  addressError ? "border border-red-700" : ""
                }`}
              />
              {addressError && !formData.address && (
                <small className="text-red-600 font-semibold">
                  {addressError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Landmark</label>
                  {landMarkError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="text"
                id="landmark"
                placeholder="Landmark"
                onChange={(e) =>
                  setFormData({ ...formData, landMark: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  landMarkError ? "border border-red-700" : ""
                }`}
              />
              {landMarkError && !formData.landMark && (
                <small className="text-red-600 font-semibold">
                  {landMarkError}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Phone</label>
                  {phoneError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="text"
                id="phone"
                placeholder="e.g +247890989878"
                onChange={handlePhoneInput}
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  phoneError ? "border border-red-700" : ""
                }`}
              />
              {phoneError && !formData.phone && (
                <small className="text-red-600 font-semibold">
                  {phoneError}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <span className="flex">
                  <label>Password</label>
                  {passwordConfirmationError && (
                    <LuAsterisk className="h-2 w-2 text-red-600" />
                  )}
                </span>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400 ${
                  passwordError ? "border border-red-700" : ""
                }`}
              />
              {passwordError && !formData.password && (
                <small className="text-red-600 font-semibold">
                  {passwordError}
                </small>
              )}
              {passwordConfirmationError && (
                <small className="text-red-600 font-semibold">
                  {passwordConfirmationError}
                </small>
              )}
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    passwordConfirmation: e.target.value,
                  })
                }
                className="py-1 px-2 focus:ring-0 focus:outline-none border border-gray-400"
              />
            </div>
          </div>
          {/* modal footer */}
          <div className="mt-2 items-center gap-2 flex float-end">
            <button
              onClick={() => setOpenCreateModal(false)}
              type="button"
              className="bg-appRed text-white py-1 md:py-2 px-4"
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              className="bg-appYellow text-black py-1 md:py-2 px-4 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </form>
        {isLoading && <ComponentLoader />}
      </div>
    </div>
  );
}

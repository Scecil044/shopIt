import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import OderConfirmation from "../../components/shop/OderConfirmation";
const mock = [
  {
    title: "   Joie Nitro E Stroller - Blue",
    image:
      "https://media.4rgos.it/s/Argos/6144070_R_SET?$Web$&$Main570$&w=440&h=440&qlt=70",
  },
  {
    title:
      "Fresh Fri Fresh Fri Triple Refined Vegetable Cooking Oil - 3 Litres",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?6954",
  },
  {
    title: "AILYONS FK-0301 Stainless Steel 1.8L Electric Kettle-Silver.",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/5259781/1.jpg?1877",
  },
  {
    title: "Bowers & Wilkins Px7 S2e Wireless Headphones - Cloud Grey 326/4616",
    image:
      "https://media.4rgos.it/i/Argos/3264616_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
  },
];
export default function Cart() {
  const { user } = useSelector((state) => state.user);
  const [checkOut, setCheckOut] = useState(false);
  const [confirmOrder, setConfirmOder] = useState(false);

  const handlePayment = () => {
    setCheckOut((prev) => !prev);
    setConfirmOder(true);
  };
  return (
    <div className="min-h-screen text-sm relative overflow-hidden">
      <div className="h-44 bg-gradient-to-tr from-appBlue to-appRed">
        <div className="h-60 overflow-hidden flex float-end">
          <img
            src="/trolley.png"
            alt="customer care"
            className="object-cover h-3/5"
          />
        </div>
      </div>
      <div className="w-full md:max-w-7xl md:mx-auto my-2 p-5">
        <div className="flex flex-col-reverse md:flex-row gap-2 w-full">
          <div className="flex-1 p-5">
            {mock?.length < 1 ? (
              <>
                <div className="text-center items-center justify-center flex flex-col">
                  <h1 className="mt-10">
                    You have no Items added to your Trolley yet
                  </h1>
                  <Link
                    to="/shop"
                    className=" py-1 md:py-1 px-4 md:px-6 transition-all duration-300 shadow-md hover:shadow-sm my-2 hover:opacity-85 bg-appYellow"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-1">
                  <FaLock className="h-5 w-5 text-green-600" />
                  <h1>
                    You Credit Card information will be encrypted from hackers
                    and crackers
                  </h1>
                </div>
                <div>
                  {mock?.map((item, index) => (
                    <div key={index} className="mt-5 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          <img
                            src={item?.image}
                            alt="avatar"
                            className="object-cover h-28 w-28"
                          />
                          <div>
                            <Link
                              to="/product"
                              className="text-lg font-semibold line-clamp-2 hover:underline"
                            >
                              {item?.title}
                            </Link>
                            <p className="line-clamp-2">
                              Give your little child the best of experience
                              through this amazing stroller. It is comfy,
                              well-built, and elegant in design. You little onw
                              will surely like it
                            </p>
                          </div>
                        </div>
                        <div className="flex text-right justify-between gap-5">
                          <div>
                            <input
                              type="number"
                              min={1}
                              defaultValue={1}
                              id="quantity"
                              className=" px-4 py-1 w-16"
                            />
                          </div>
                          <span className=" pr-2">
                            <h2 className="text-nowrap font-bold text-lg">
                              KSH 2550
                            </h2>

                            <h2 className="text-nowrap">KSH 255 each</h2>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="w-full md:w-[40%]">
            <div className="p-3 bg-appBlue text-center w-full">
              <h1 className="text-white">Your Invoice</h1>
            </div>
            <div className="my-2">
              <span className="flex items-center justify-between">
                <h1>Grand Total</h1>
                <h1 className="font-semibold text-lg">KSH 3470</h1>
              </span>
              <div>
                <button
                  onClick={() => setCheckOut((prev) => !prev)}
                  className="bg-appYellow w-full flex items-center justify-center py-1 shadow-md hover:shadow-none hover:opacity-90 transition-all duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* checkout */}

      <aside
        className={`absolute right-0 bg-white p-5 top-52 ${
          checkOut ? "" : " -mr-[92%] md:-mr-[50%]"
        }  w-[92%] md:w-[50%] shadow-md shadow-gray-300 border border-gray-300 transition-all duration-1000`}
      >
        <span className="flex text-lg font-semibold">
          PRI <h2 className="text-appYellow font-bold">ME</h2>PIC Checkout
        </span>
        <div className="my-2">
          <span className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Delivery Address</h1>

            <Link to="/profile">
              <MdEdit className="w-5 h-5" />
            </Link>
          </span>
          <div className="md:grid md:grid-cols-2">
            <span className="flex gap-1">
              <h1>Name:</h1>
              <h1>{user?.firstName + " " + user?.lastName}</h1>
            </span>
            <span className="flex gap-1">
              <h1>Phone:</h1>
              <h1>{user?.phone || "0766728282"}</h1>
            </span>
            <span className="flex gap-1">
              <h1>Email:</h1>
              <h1>{user?.email}</h1>
            </span>
            <span className="flex gap-1">
              <h1>City:</h1>
              <h1>{user?.address?.city || "Nairobi"}</h1>
            </span>
            <span className="flex gap-1">
              <h1>Town:</h1>
              <h1>{user?.address?.town || "Wendani"}</h1>
            </span>
            <span className="flex gap-1">
              <h1>LandMark:</h1>
              <h1>{user?.address?.landmark || "KU"}</h1>
            </span>
          </div>
        </div>
        <span className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Items to be delivered</h1>
          <button onClick={() => setCheckOut((prev) => !prev)}>
            <MdEdit className="w-5 h-5" />
          </button>
        </span>
        <div className="my-1 grid grid-cols-2 gap-3">
          {mock?.map((item, index) => (
            <div
              key={index}
              className="p-2 border-2 border-dotted border-appBlue"
            >
              <div className="flex">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="object-cover h-16 w-16"
                />
                <div>
                  <h1 className="line-clamp-2">{item?.title}</h1>
                </div>
              </div>
              <div className="flex float-end">
                <h1 className="font-bold text-red-700">KSH 234</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="my-2">
          <h1 className="font-semibold text-lg">Delivery Method</h1>
          <div className="flex flex-col gap-2 mt-1">
            <span className="flex items-center gap-2">
              <input type="radio" id="delivery" />
              <h1>Home/Office Delivery</h1>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" id="delivery" />
              <h1>Pickup</h1>
            </span>
          </div>
        </div>
        <div className="my-2">
          <h1 className="font-semibold text-lg">Payment Method</h1>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 my-2">
            <div className="flex items-center gap-2">
              <input type="radio" id="Mpesa" />
              <h1>MPESA on Delivery</h1>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="stripe" />
              <h1>Stripe Checkout</h1>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="card" />
              <h1>VISA/ MASTERCARD</h1>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handlePayment}
            className="bg-appYellow text-black focus:ring-1 ring-offset-2 focus:ring-appBlue shadow-md hover:shadow-lg transition-all duration-300 px-6 py-1"
          >
            Confirm Order
          </button>
        </div>
      </aside>

      {confirmOrder && <OderConfirmation />}
    </div>
  );
}

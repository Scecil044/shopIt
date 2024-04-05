import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa6";

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
  return (
    <div className="min-h-screen text-sm">
      <div className="h-44 bg-gradient-to-tr from-appBlue to-appRed">
        <div className="h-60 overflow-hidden flex float-end">
          <img
            src="/trolley.png"
            alt="customer care"
            className="object-cover h-3/5"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-2">
        <div className="flex flex-col-reverse md:flex-row gap-2">
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
          <div className="w-full md:w-[40%] top-10 sticky">
            <div className="p-3 bg-appBlue text-center">
              <h1 className="text-white">Your Invoice</h1>
            </div>
            <div className="p-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import TrolleyModal from "../../components/modals/TrolleyModal";
import { useState } from "react";
const mock = [
  {
    title: "Soap",
  },
  {
    title: "Soap",
  },
  {
    title: "Soap",
  },
  {
    title: "Soap",
  },
  {
    title: "Soap",
  },
  {
    title: "Soap",
  },
];
export default function WishList() {
  const [openModal, setOpenModal] = useState(false);

  const handleAddToCart = () => {
    setOpenModal(true);
  };
  return (
    <div className="min-h-screen text-black text-sm">
      <div className="h-44 md:h-60 bg-gradient-to-tr from-appBlue to-appRed">
        <div className="h-60 overflow-hidden flex float-end">
          <img
            src="/trolley.png"
            alt="customer care"
            className="object-cover h-3/5 md:h-full"
          />
        </div>
      </div>
      <div className="w-full md:max-w-7xl md:mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-5 items-start w-full">
          <div className="w-full md:w-[25%] shadow-md shadow-gray-300 p-5 top-10 sticky">
            <span className="font-semibold text-lg">Heads Up!</span>
            <div className="my-3">
              You can easily checkout items on your wishlist by adding them to
              your trolley, and processing the transactions needed
            </div>
            <div>
              <Link
                to="/shop"
                className="w-full flex items-center justify-center gap-2 bg-appYellow p-1 shadow-lg focus:outline-none hover:opacity-90 hover:underline transition-all duration-300 hover:shadow-md"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="flex-1 shadow-md shadow-gray-300 p-5">
            {mock?.length < 1 ? (
              <>
                <div className="text-center flex items-center justify-center">
                  <h1 className="my-10">
                    You have no Items added to your WishList yet
                  </h1>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                {mock?.map((item, index) => (
                  <div key={index} className="shadow-md">
                    <div className="flex p-2">
                      <div>
                        <img
                          src="https://media.4rgos.it/s/Argos/6144070_R_SET?$Web$&$Main570$&w=440&h=440&qlt=70"
                          alt="product"
                          className="object-cover h-28 md:h-32 min-w-32"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <Link
                            to="/product"
                            className="text-lg font-semibold line-clamp-2 hover:underline"
                          >
                            Joie Nitro E Stroller - Blue
                          </Link>
                          <IoIosClose className="h-5 w-5" />
                        </div>
                        <p className="line-clamp-2">
                          Give your little child the best of experience through
                          this amazing stroller. It is comfy, well-built, and
                          elegant in design. You little onw will surely like it
                        </p>
                        <div className="flex float-end mt-2">
                          <button
                            onClick={handleAddToCart}
                            className="py-1 px-4 md:px-6 bg-appYellow"
                          >
                            Add to Trolley
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {openModal && (
        <TrolleyModal setOpenModal={setOpenModal} />
      )}
    </div>
  );
}

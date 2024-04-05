import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function TrolleyModal({setOpenModal}) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full inset-0 fixed bg-black/10 flex items-center justify-center">
      <div className="p-2 bg-white shadow-md shadow-gray-300 w-[79%] md:w-[30%]">
        {/* modal header */}
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Added to Trolley</h1>
          <button onClick={() => setOpenModal(false)}>
            <IoIosClose className="h-6 w-6" />
          </button>
        </div>
        {/* modal body */}
        <div className="flex">
          <img
            src="https://media.4rgos.it/s/Argos/6144070_R_SET?$Web$&$Main570$&w=440&h=440&qlt=70"
            alt="avatar"
            className="object-cover h-20 w-20"
          />
          {/* item description */}
          <div>
            <span className="flex items-center gap-1">
              <span>
                <h1 className="text-green-700 font-bold">1X</h1>
              </span>
              Joie Nitro E Stroller - Blue
            </span>
            <p className="line-clamp-2">
              Give your little child the best of experience through this amazing
              stroller. It is comfy, well-built, and elegant in design. You
              little onw will surely like it
            </p>
          </div>
        </div>
        {/* modal footer */}

        <div className="flex gap-2 mt-1">
          <button className="py-1 md:py-1.5 px-4 bg-appYellow text-black shadow-md hover:opacity-90 hover:underline transition-all duration-300 text-nowrap">
            Cancel
          </button>
          <button
            onClick={() => {
              navigate("/cart");
              setOpenModal(false);
            }}
            className="py-1 md:py-1.5 px-4 bg-appRed text-white shadow-md hover:opacity-90 hover:underline transition-all duration-300 text-nowrap"
          >
            Go to Trolley
          </button>
        </div>
      </div>
    </div>
  );
}

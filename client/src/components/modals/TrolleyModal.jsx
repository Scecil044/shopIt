import { IoIosClose } from "react-icons/io";
export default function TrolleyModal() {
  return (
    <div className="w-full h-full inset-0 fixed bg-black/10 flex items-center justify-center">
      <div className="p-2 bg-white shadow-md shadow-gray-300 w-[80%] md:w-[30%]">
        {/* modal header */}
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Added to Trolley</h1>
          <IoIosClose className="h-6 w-6" />
        </div>
        {/* modal footer */}

        <div className="flex gap-2">
          <button className="py-1 px-6 bg-appBlue text-white">
            Continue Shopping
          </button>
          <button className="py-1 px-6 bg-appRed text-white">
            Go to Trolley
          </button>
        </div>
      </div>
    </div>
  );
}

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function FrontEndChat({ setOpenChat }) {
  return (
    <>
      <div className="md:w-[400px] bg-slate-50 shadow-md hover:shadow-none transition-all duration-700 shadow-appBlack">
        <div className="bg-red-900 p-2 w-full flex items-center justify-end">
          <div className="">
            <button onClick={() => setOpenChat(false)}>
              <IoClose className="text-white h-5 w-5" />
            </button>
          </div>
        </div>
        <form className="h-[200px] overflow-y-auto p-4 text-sm">
          <div className="flex justify-end">
            <div className="bg-red-100 p-5 shadow-md border border-gray-100 relative">
              Hello, How my I help you
              <div className="absolute bg-red-100 -right-1 p-2 rotate-45"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

import { IoIosWarning } from "react-icons/io";
export default function DeleteModal({
  openDeleteModal,
  setOpenDeleteModal,
  role,
}) {
  return (
    <div className="fixed flex inset-0 items-center h-full w-full justify-center bg-black/50 text-xs">
      <div className="p-3 bg-white w-[80%] md:w-[25%] ml-8 md:ml-0">
        {/* modal body */}
        <div className="flex gap-5 mb-1">
          <div className="">
            <IoIosWarning className="h-12 w-12 text-amber-500" />
          </div>
          <div className="flex-1">
            {role === "deleteUser" ? (
              <p className="font-semibold">
                You are about to delete Spencer Cecil from the system. Do you
                want to proceed with this operation?
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpenDeleteModal(false)}
            className="py-1 px-3 bg-pink-800 text-white focus:opacity-90 transition-all duration-300 shadow-md hover:shadow-sm flex items-center justify-center gap-1"
          >
            Cancel
          </button>
          <button className="py-1 px-3 bg-[#1c702c] text-white focus:opacity-90 transition-all duration-300 shadow-md hover:shadow-sm flex items-center justify-center gap-1">
            <div className="rounded-full animate-spin border-b-2 border-r-2 border-white h-4 w-4"></div>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

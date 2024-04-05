import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen text-sm">
      <div className="h-60 bg-gradient-to-tr from-appBlue to-appRed">
        <div className="h-60 overflow-hidden flex float-end">
          <img src="/care.png" alt="customer care" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-5">
        <div className="flex flex-col p-5 flex-1">
          <div className="ml-10">
            <h1 className="text-xl">
              Having troubble navigating through the Primepick?
            </h1>
            <h2 className="italic">No worries, we got you covered!</h2>
            <h3 className="italic">
              Fill out your details in the provided form to raise a support
              ticket. Our customer care desk will get back to you as soon as
              possible
            </h3>
          </div>
        </div>
        <div className="p-5 flex-1">
          <form className="flex flex-col gap-3 min-w-full md:w-[500px]">
            <div className="flex items-center justify-between my-1 text-xs">
              <label className="font-semibold text-xs">First Name</label>
              <div>
                <h1 className="text-red-600 font-semibold">Required</h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" className="py-1 px-2" placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between my-1 text-xs">
                <label className="font-semibold text-xs">First Name</label>
                <div>
                  <h1 className="text-red-600 font-semibold">Required</h1>
                </div>
              </div>
              <input type="text" className="py-1 px-2" placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between my-1 text-xs">
                <label className="font-semibold text-xs">First Name</label>
                <div>
                  <h1 className="text-red-600 font-semibold">Required</h1>
                </div>
              </div>
              <input type="text" className="py-1 px-2" placeholder="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between my-1 text-xs">
                <label className="font-semibold text-xs">First Name</label>
                <div>
                  <h1 className="text-red-600 font-semibold">Required</h1>
                </div>
              </div>
              <input type="text" className="py-1 px-2" placeholder="" />
            </div>
            <div>
              <button className="w-full bg-appBlue text-white py-1 px-4 flex items-center justify-center shadow-md rounded-sm hover:shadow-sm transition-all duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

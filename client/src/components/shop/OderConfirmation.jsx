import { Link } from "react-router-dom";
import Confetti from "../Confetti";
import { TiTick } from "react-icons/ti";

export default function OderConfirmation() {
  return (
    <div className="flex inset-0 fixed bg-white z-50 w-full h-full items-center justify-center">
      <div className="flex gap-5 items-center">
        <div className="rounded-full h-20 w-20 bg-[#18a92b] flex items-center justify-center">
          <TiTick className="h-12 w-28 text-white" />
        </div>
        <div>
          <h1 className="text-lg">Your Order was Placed successfully</h1>
          <p>
            A notification will be sent to you once the item is dispatched.
            Thanks for trusting{" "}
            <span className="flex font-semibold">
              PRI <h2 className="text-appYellow font-bold">ME</h2>PICK
            </span>
          </p>
          <div className="my-2">
            <Link
              to="/"
              className="py-1 px-4 bg-[#18a92b] text-white shadow-md hover:opacity-90 transition-all duration-500 my-2"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>

      <Confetti />
    </div>
  );
}

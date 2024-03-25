import { useState } from "react";
import Banner from "../components/products/Banner";
import Categories from "../components/products/Categories";
import ComputingDeals from "../components/products/ComputingDeals";
import FeaturedProducts from "../components/products/FeaturedProducts";
import FlashSales from "../components/products/FlashSales";
import { IoClose } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import FrontEndChat from "./chat/FrontEndChat";

export default function Home() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="min-h-screen p-2 md:p-5 relative">
      <div>
        <Banner />
      </div>

      <div>
        <Categories />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Featured Products</h1>
        <FeaturedProducts />
      </div>

      <div>
        <h1 className="text-lg font-semibold">Flash Sales</h1>
        <FlashSales />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Computing Deals</h1>
        <ComputingDeals />
      </div>

      <div
        onClick={() => setOpenChat((prev) => !prev)}
        className="rounded-full bg-red-900 h-14 w-14 fixed top-[550px] right-5 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-sm"
      >
        {openChat ? (
          <IoClose className="text-white h-6 w-6 transition-all duration-300" />
        ) : (
          <LuMessageCircle className="text-white h-6 w-6 transition-all duration-300" />
        )}
      </div>

      <div className={`${openChat ? "fixed top-20 right-2 md:right-10" : "hidden"}`}>
        <FrontEndChat openChat={openChat} setOpenChat={setOpenChat} />
      </div>
    </div>
  );
}

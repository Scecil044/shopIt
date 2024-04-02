import { AiOutlineHeart } from "react-icons/ai";
import BrowsingHistory from "../../components/products/BrowsingHistory";
import RelatedProducts from "../../components/products/RelatedProducts";
import { Link } from "react-router-dom";
import BriefDescription from "../../components/products/BriefDescription";

export default function Product() {
  return (
    <div className="min-h-screen p-5 text-sm">
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="min-w-[400px]">
          <div>
            <img
              src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/1.jpg?4541"
              alt="avatar"
              className="max-h-[420px] object-cover"
            />
            {/* slider */}
            <div className="flex gap-1 items-center overflow-x-auto no-scrollbar">
              <img
                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/1.jpg?4541"
                alt="pic"
                className="h-32 w-32 object-cover"
              />
              <img
                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/4.jpg?4541"
                alt="pic"
                className="h-32 w-32 object-cover"
              />
              <img
                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/1.jpg?4541"
                alt="pic"
                className="h-32 w-32 object-cover"
              />
              <img
                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/4.jpg?4541"
                alt="pic"
                className="h-32 w-32 object-cover"
              />
              <img
                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/1.jpg?4541"
                alt="pic"
                className="h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 min-w-[700px] gap-5">
          <div className="flex-1 bg-white p-5">
            <h1 className="text-lg">
              VpMax-9 - Sight Care and Antioxidant Supplement with Eye Vitamins,
              Lutein, Lycopene and Bilberry Extract - 6 Bottles
            </h1>
            <span className="brand flex">
              <h1 className="text-blue-600 font-semibold">Brand |</h1>
              <h1 className="ml-2 font-semibold">Ahrizon Products</h1>
            </span>

            <button className="w-full flex items-center justify-center py-1 bg-appYellow text-black font-semibold hover:opacity-90 transition-all duration-300 shadow-md focus:ring-2 focus:ring-appYellow ring-offset-1">
              Add to Cart
            </button>

            <div className="my-5">
              <BriefDescription />
            </div>
          </div>
          <div className="shadow-md bg-white p-5 w-[310px] text-sm">
            <span>
              <h1 className="text-nowrap text-red-700 font-bold text-xl">
                Ksh 86000
              </h1>
              <span className="flex gap-1">
                <h1>Save upto 5000</h1>
                <div className="flex">
                  <p className="line-through">was 91000</p>
                </div>
              </span>
            </span>
            <span className="flex">
              <h1 className="text-nowrap">Earliest Delivery: </h1>
              <h1 className="text-nowrap ml-1">24/01/2024</h1>
              <h2 className="text-nowrap">(4 days from now)</h2>
            </span>

            <div className="my-5">
              <h1 className="font-bold text-appRed">
                Only 10 items left at this price!
              </h1>
            </div>

            <div className="my-2">
              <h1>Supplier accepts all payment modes</h1>
            </div>

            <div className="my-3">
              <p className="font-semibold">
                Note that this supplier is one of our trusted clients. All
                possible complaints about the delivered products will be
                addressed within the first 14 days of delivery
              </p>
            </div>

            <div className="flex my-2 items-center justify-between">
              <button className="flex text-blue-600 font-semibold">
                Add to wishlist Instead
              </button>
              <button>
                <AiOutlineHeart className="h-5 w-5" />
              </button>
            </div>

            <button className="w-full flex items-center justify-center py-1 bg-appYellow text-black font-semibold hover:opacity-90 transition-all duration-300 shadow-md focus:ring-2 focus:ring-appYellow ring-offset-1">
              Chekout
            </button>

            <div className="mY-5">
              <button className="font-semibold text-blue-600 hover:underline">
                Order on Express?
              </button>
              <p>
                Your products will be delivered much faster than the standard
                delivery mode
              </p>
            </div>
            <div className="my-5 p-5 border border-gray-400 flex text-center">
              <Link>
                <h1>PRIMEPICS </h1>
                <h1>
                  Terms and conditions apply for all deliveries and product
                  recalls
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>

      <div>
        <BrowsingHistory />
      </div>
    </div>
  );
}

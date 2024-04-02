import BrowsingHistory from "../../components/products/BrowsingHistory";
import RelatedProducts from "../../components/products/RelatedProducts";

export default function Product() {
  return (
    <div className="min-h-screen p-5">
      <div className="flex">
        <div className="w-[400px]">
          <div>
            <img
              src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/204236/1.jpg?4541"
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex flex-1 gap-5">
          <div className="flex-1 bg-white p-5">
            <h1 className="text-lg flex flex-wrap">
              Shop.me Gift Card in a Birthday Pop-Up Box
            </h1>
          </div>
          <div className="shadow-md bg-white p-5 w-[270px]"></div>
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

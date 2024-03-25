import Banner from "../components/products/Banner";
import Categories from "../components/products/Categories";
import ComputingDeals from "../components/products/ComputingDeals";
import FeaturedProducts from "../components/products/FeaturedProducts";
import FlashSales from "../components/products/FlashSales";

export default function Home() {
  return (
    <div className="min-h-screen p-5">
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
    </div>
  );
}

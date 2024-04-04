import { popularBrands } from "../../utils/data";

export default function PopularBrands() {
  return (
    <>
      <div className="snap-x w-[99%] mx-auto p-3 scroll-smooth no-scrollbar">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {popularBrands.map((item, index) => (
            <div
              key={index}
              className="h-[240px] w-[200px] md:w-[220px] hover:h-[250px] transition-all duration-700 hover:scale-105 hover:text-sm"
            >
              <img src={item?.image} alt="avatar" className="w-[150px] md:w-full bg-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

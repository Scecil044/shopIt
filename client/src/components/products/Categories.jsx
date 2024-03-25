import { Link } from "react-router-dom";

const mock = [
  {
    name: "Gaming",
  },
  {
    name: "Technology",
  },
  {
    name: "Clothing",
  },
  {
    name: "Furniture",
  },
  {
    name: "Office",
  },
  {
    name: "Sports & Leisure",
  },
  {
    name: "Baby & Nursery",
  },
  {
    name: "Appliances",
  },
  {
    name: "Gift & Parties",
  },
  {
    name: "Food & Beverage",
  },
  {
    name: "Health & Nursing",
  },
  {
    name: "Health & Nursing",
  },
];

export default function Categories() {
  return (
    <>
      <div className="snap-x overflow-x-auto w-[99%] mx-auto p-3 scroll-smooth no-scrollbar my-3">
        <div className="flex gap-8">
          {mock?.map((category, index) => (
            <Link
              key={index}
              className="rounded-full h-24 min-w-24 text-center text-sm flex items-center justify-center bg-red-900 text-white p-5"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

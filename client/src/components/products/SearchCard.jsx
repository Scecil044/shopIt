import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const mock = [
  {
    text: "Men Loafet fit. Ideal for sports, casual war, and driving",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/002755/1.jpg?0371",
  },
  {
    text: "32' Vision Plus Television Set. HDMI, USB3",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/514194/1.jpg?4281",
  },
  {
    text: "TECNO POP 52 6' OLED AndoidOne",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/841755/1.jpg?4244",
  },
  {
    text: "Vitron V27 8CLP .night vision display light",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/224652/1.jpg?7954",
  },
  {
    text: "Hikers 32' inch Television. OLED display",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6006071/1.jpg?4308",
  },
  {
    text: "Annov 7 speed portable blender",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/7687951/1.jpg?9846",
  },
  {
    text: "Four colored Denim Jeans",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/335517/1.jpg?1589",
  },
  {
    text: "Fashion Ladies Denim Jeans",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/3035001/1.jpg?7781",
  },
  {
    text: "Fashion Mens Casual",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/159854/1.jpg?3219",
  },
  {
    text: "Graniar anti-blemish",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/7915911/1.jpg?2728",
  },
  {
    text: "Fashion Ladies Denim Jeans",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/3035001/1.jpg?7781",
  },
  {
    text: "Mens Skinny Official wear",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/038832/1.jpg?0286",
  },
];
export default function SearchCard() {
  return (
    <>
      <div className="w-full snap-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {mock.map((product, index) => (
            <div
              key={index}
              className="shadow-xl min-w-[180px] md:min-w-[220px] p-2 bg-white rounded-sm border border-gray-300 hover:shadow-lg transition-all duration-300 snap-center"
            >
              <Link to="/product" className="overflow-hidden">
                <img
                  src={product.image}
                  alt="..."
                  className="w-full h-[140px] md:h-[200px] object-cover hover:scale-105 transition-all duration-500"
                />
              </Link>
              <div>
                <p className="line-clamp-1">{product.text}</p>
                <span className="font-semibold">
                  <p>KSH: 2500</p>
                </span>
                <span className="text-neutral-400">
                  <p className="flex line-through">KSH: 3500</p>
                </span>
              </div>
              <div className="flex items-center justify-between gap-5">
                <button className="py-1 px-4 text-black font-semibold bg-appYellow shadow-md hover::shadow-none transition-all duration-300 hover:opacity-90 rounded-sm">
                  Add to cart
                </button>
                <button>
                  <AiOutlineHeart className="h-8 w-8 text-red-800" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

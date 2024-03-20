const mock = [
  {
    text: "Men Loafet fit. Ideal for sports, casual war, and driving",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/7945191/1.jpg?8345",
  },
  {
    text: "32' Vision Plus Television Set. HDMI, USB3",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/203197/1.jpg?2716",
  },
  {
    text: "TECNO POP 52 6' OLED AndoidOne",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1695511/1.jpg?6868",
  },
  {
    text: "Sayona PPS V27 8CLP .night vision display light",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/6655191/1.jpg?8585",
  },
  {
    text: "Hikers 32' inch Television. OLED display",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/7121031/1.jpg?2903",
  },
  {
    text: "Annov 7 speed portable blender",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/7687951/1.jpg?9846",
  },
  {
    text: "seven",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "eight",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "five",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "six",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "seven",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "eight",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
];
export default function FlashSales() {
  return (
    <>
      <div className="snap-x overflow-x-auto w-[99%] mx-auto p-3 scroll-smooth no-scrollbar">
        <div className="flex space-x-2">
          {mock.map((product, index) => (
            <div
              key={index}
              className="shadow-xl min-w-[220px] p-2 bg-white rounded-sm border border-gray-300 hover:shadow-lg transition-all duration-300 snap-center"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt="..."
                  className="w-full h-[200px] object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
              <div>
                <p className="line-clamp-1">{product.text}</p>
                <span className="font-semibold">
                  <p>KSH: 2500</p>
                </span>
                <span className="text-neutral-400">
                  <p className="flex line-through">KSH: 3500</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

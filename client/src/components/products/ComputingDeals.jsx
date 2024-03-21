const mock = [
  {
    text: "Men Loafet fit. Ideal for sports, casual war, and driving",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/9186981/1.jpg?0948",
  },
  {
    text: "32' Vision Plus Television Set. HDMI, USB3",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/979296/1.jpg?9843",
  },
  {
    text: "TECNO POP 52 6' OLED AndoidOne",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/843353/1.jpg?6027",
  },
  {
    text: "Vitron V27 8CLP .night vision display light",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/965916/1.jpg?6808",
  },
  {
    text: "Hikers 32' inch Television. OLED display",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/900027/1.jpg?6900",
  },
  {
    text: "Annov 7 speed portable blender",
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/5502661/1.jpg?7409",
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
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/204236/1.jpg?4541",
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
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/1957191/1.jpg?5047",
  },
];
export default function ComputingDeals() {
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

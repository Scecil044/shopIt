const mock = [
  {
    text: "one",
    image:
      "https://i.pinimg.com/originals/9c/86/c7/9c86c7d2781a000f6a8bc863b2ad1b2a.jpg",
  },
  {
    text: "two",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Acjfxa936A3cUu7uHsKBi8Pys_FYQpJYBuSlduZ9osWhaw5yiokOtIk0N_M6iwnBn9Q&usqp=CAU",
  },
  {
    text: "three",
    image:
      "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/x7/X7DarkShadow/X3-1680x756_05.jpg.asset.1642656232136.jpg",
  },
  {
    text: "four",
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
];
export default function FeaturedProducts() {
  return (
    <>
      {mock.map((product, index) => (
        <div
          key={index}
          className="shadow-xl flex flex-1 p-2 bg-white rounded-sm border border-gray-300 hover:shadow-lg transition-all duration-300"
        >
          {product.text}
        </div>
      ))}
    </>
  );
}

import { Carousel } from "flowbite-react";
import { menuItems } from "../../utils/data";
import { Link } from "react-router-dom";

export default function ShopCarousel() {
  return (
    <div className="sm:h-64 h-48 xl:h-80 2xl:h-96 flex gap-5">
      <div className="bg-white shadow-md p-5">
        <div className="flex flex-col gap-2 p-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="text-sm text-nowrap hover:underline transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Carousel slideInterval={5000}>
        <img
          src="https://media.4rgos.it/i/Argos/0424-M020-23-samsung-watch-desktab?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
        <img
          src="https://media.4rgos.it/i/Argos/0124-M020-PLP-bose-headphone-desktab?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
        <img
          src="https://media.4rgos.it/i/Argos/0324-M001.5-hero-homepage-easter-offer-desktop?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
        <img
          src="https://media.4rgos.it/i/Argos/0324-M020-PLP-apple-watch-desktab?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
        <img
          src="https://media.4rgos.it/i/Argos/0324-M020-23-samsung-galaxy-smart-phone-desktab?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
        <img
          src="https://media.4rgos.it/i/Argos/0324-M020-23-amazon-tv-show-desktab?w=auto&qlt=50&fmt=webp&noiser=0&"
          alt="..."
          className="object-cover h-full"
        />
      </Carousel>
    </div>
  );
}

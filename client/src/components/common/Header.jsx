import { useState } from "react";

export default function Header() {
  const [tabIndex, setTabIndex] = useState(false);

  const initiateNavChange = () => {
    if (window.scrollY >= 20) {
      setTabIndex(true);
    } else {
      setTabIndex(false);
    }
  };
  window.addEventListener("scroll", initiateNavChange);
  return (
    <div
      className={`shadow-lg flex items-center pl-8 z-50 top-0 sticky p-5 transition-all duration-700 ${
        tabIndex ? "bg-green-800 text-white" : ""
      }`}
    >
      Header
    </div>
  );
}

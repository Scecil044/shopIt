import { useEffect, useState } from "react";
import SearchCard from "../../components/products/SearchCard";
import ComponentLoader from "../../components/admin/ComponentLoader";

export default function Search() {
  const [sidebarData, setSideBarData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromURL = urlParams.get("searchTerm");

    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <div className="p-2 bg-white shadow-md text-sm">
        <span className="flex items-center gap-2">
          <h1>Showing 1 - 45 of over 100,000 search results from</h1>{" "}
          <span className="flex items-center font-semibold">
            <h2>PRI</h2>
            <h2 className="text-appYellow">ME</h2>
            <h2>PICK</h2>
          </span>
        </span>
      </div>
      <div className="flex">
        <aside className="hidden md:inline min-w-[20%]">one</aside>
        <main className="flex-1">
          <div className="h-72 bg-gradient-to-tr from-appBlue to-appRed flex items-center justify-center relative">
            <form className="flex flex-col w-[70%] z-20">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="rounded-2xl py-1 md:py-2 px-4"
              />
            </form>
            <img src="/search.png" alt="search image" className="absolute h-64 top-0" />
          </div>

          <div>
            <SearchCard />
          </div>
        </main>
      </div>
      <ComponentLoader />
    </div>
  );
}

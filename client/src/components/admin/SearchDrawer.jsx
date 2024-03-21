import { Drawer } from "antd";
import { useState } from "react";

export default function SearchDrawer({
  open,
  setOpen,
  placement,
  setPlacement,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer
        title="Search Users"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <form className="flex items-center gap-1 w-full">
          <input
            type="text"
            id="user"
            value={searchTerm}
            placeholder="What to search..."
            className="focus:outline-none focus:ring-0 py-2 px-2 flex-1"
          />
          <button className="py-2 px-4 bg-appBlue text-white">Go</button>
        </form>
      </Drawer>
    </div>
  );
}

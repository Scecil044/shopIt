import { Drawer } from "antd";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import SearchSkeleton from "./SearchSkeleton";
import { useDispatch } from "react-redux";
import { setSelectedChat } from "../../redux/chatsSlice";

export default function SearchDrawer({
  open,
  setOpen,
  placement,
  setPlacement,
  openMessage,
  setOpenMessage,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toast = useToast();
  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      toast({
        position: "top-left",
        status: "warning",
        duration: 5000,
        isClosable: "true",
        title: "Please type wht you want to search first",
      });
    }
    try {
      setLoading(true);
      const res = await fetch(`/api/users?searchTerm=${searchTerm}`);
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        toast({
          position: "top-left",
          status: "error",
          duration: 5000,
          isClosable: "true",
          title: "Oops! something went wrong",
        });
        return;
      }
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      setLoading(false);
      toast({
        position: "top-left",
        status: "warning",
        duration: 5000,
        isClosable: "true",
        title: "failed to load search results",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/chats/chat`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        toast({
          position: "top-left",
          status: "error",
          duration: 5000,
          isClosable: "true",
          title: "Oops! something went wrong",
        });
        return;
      }
      dispatch(setSelectedChat(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({
        position: "top-left",
        status: "warning",
        duration: 5000,
        isClosable: "true",
        title: "failed to load search results",
      });
    }
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
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-1 w-full"
        >
          <input
            type="text"
            id="user"
            value={searchTerm}
            placeholder="What to search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none focus:ring-0 py-2 px-2 flex-1"
          />
          <button className="py-2 px-4 bg-appBlue text-white">Go</button>
        </form>
        {loading ? (
          <SearchSkeleton />
        ) : (
          <>
            <div className="flex flex-col gap-2">
              {searchResult?.map((user, index) => (
                <div
                  onClick={() => {
                    accessChat(user._id);
                    setOpen(false);
                    setOpenMessage(true);
                  }}
                  key={index}
                  className="flex gap-2 items-center bg-appBlue text-white p-2 rounded-md shadow-md cursor-pointer"
                >
                  <div>
                    <img
                      src={user.profilePicture}
                      alt="..."
                      className="h-12 w-12 rounded-full"
                    />
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <h1 className="font-semibold">Name</h1>{" "}
                      {user.firstName + " " + user.lastName}
                    </span>
                    <span className="flex items-center gap-1">
                      <h1 className="font-semibold">Email</h1> {user.email}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
}

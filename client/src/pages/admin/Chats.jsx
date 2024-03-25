import { useEffect, useState } from "react";
import MessageCard from "../../components/admin/MessageCard";
import { Alert } from "flowbite-react";
import SearchDrawer from "../../components/admin/SearchDrawer";
import ChatComponent from "../../components/admin/ChatComponent";
import { useSelector } from "react-redux";

export default function Chats() {
  const { user } = useSelector((state) => state.user);
  const { selectedChat } = useSelector((state) => state.chats);
  const [openMessage, setOpenMessage] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showChatList, setShowChatList] = useState(true);
  const [chatList, setChatList] = useState([]);

  const [placement, setPlacement] = useState("left");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await fetch(`/api/chats/fetch/chats`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
        }
        setChatList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, []);
  console.log(chatList.length);
  return (
    <>
      <div className="hidden md:inline bg-white">
        <Alert color="warning" withBorderAccent>
          <span>
            <span className="font-medium">Module info!</span> This table shows
            the list of all users in the database
          </span>
        </Alert>
      </div>
      <div className="flex gap-5 mt-3">
        <div className="flex-1 bg-white p-5 shadow-xl">
          <div className="flex">
            <div
              className={`${
                showChatList
                  ? "md:flex-1 md:flex md:flex-col md:gap-2 md:h-[500px] md:overflow-y-auto"
                  : "hidden md:flex-1 md:flex md:flex-col md:gap-2 md:h-[500px] md:overflow-y-auto"
              } transition-all duration-300`}
            >
              <div className="bg-white top-0 sticky shadow-md p-1">
                <input
                  onClick={showDrawer}
                  type="text"
                  placeholder="Search ..."
                  className="focus:outline-none focus:ring-0 focus:border-b-2 w-full"
                />
              </div>
              <ChatComponent
                setOpenMessage={setOpenMessage}
                activeTab={setActiveTab}
                setActiveTab={setActiveTab}
                setShowChatList={setShowChatList}
                chatList={chatList}
              />
            </div>

            <div
              className={`${
                !showChatList ? "flex flex-1" : "hidden"
              } md:flex md:flex-1`}
            >
              {openMessage && (
                <MessageCard
                  openMessage={openMessage}
                  selectedChat={selectedChat}
                />
              )}
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-5 shadow-xl">tWO</div> */}
      </div>

      <SearchDrawer
        open={open}
        setOpen={setOpen}
        placement={placement}
        setPlacement={setPlacement}
        setOpenMessage={setOpenMessage}
        selectedChat={selectedChat}
      />
    </>
  );
}

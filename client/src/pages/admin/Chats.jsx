import { useState } from "react";
import MessageCard from "../../components/admin/MessageCard";
import { Alert } from "flowbite-react";

const mock = [
  {
    profilePicture: "https://randomuser.me/portraits/women/44.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/55.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/4.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
  {
    profilePicture: "https://randomuser.me/portraits/women/14.jpg",
    message: "This is a humble request. Please complete my order today",
  },
];
export default function Chats() {
  const [openMessage, setOpenMessage] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showChatList, setShowChatList] = useState(true);
  return <>
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
                  type="text"
                  placeholder="Search ..."
                  className="focus:outline-none focus:ring-0 focus:border-b-2 w-full"
                />
              </div>
              {mock?.map((chat, index) => (
                <div
                  onClick={() => {
                    setOpenMessage(true);
                    setActiveTab(index);
                    setShowChatList(false);
                  }}
                  key={index}
                  className={`flex items-center gap-1 p-2 cursor-pointer hover:scale-105 transition-all duration-700 shadow-lg ${
                    activeTab === index ? "border-l-gray-400 border-l-4" : ""
                  }`}
                >
                  <img
                    src={chat?.profilePicture}
                    alt="..."
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm line-clamp-2">
                      This is a humble request. Please complete my order today
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`${
                !showChatList ? "flex flex-1" : "hidden"
              } md:flex md:flex-1`}
            >
              {openMessage && <MessageCard />}
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-5 shadow-xl">tWO</div> */}
      </div>
  </>;
}

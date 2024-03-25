import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat, chats } from "../../redux/chatsSlice";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { setName } from "../../utils/config";

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
export default function ChatComponent({
  setOpenMessage,
  setActiveTab,
  setShowChatList,
  activeTab,
  chatList,
}) {
  const { user } = useSelector((state) => state.user);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
      {chatList?.map((chat, index) => (
        <div
          onClick={() => {
            setOpenMessage(true);
            setActiveTab(index);
            setShowChatList(false);
            accessChat(chat.users[1]._id);
          }}
          key={index}
          className={`flex items-center gap-1 p-2 cursor-pointer hover:scale-105 transition-all duration-700 shadow-lg ${
            activeTab === index ? "border-l-gray-400 border-l-4" : ""
          }`}
        >
          <img
            src={chat.users[0].profilePicture}
            alt="..."
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-semibold">
              {!chat.isGroupChat ? setName(chat.users, user) : chat.chatName}
            </p>
            <p className="text-sm line-clamp-2">
              This is a humble request. Please complete my order today
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

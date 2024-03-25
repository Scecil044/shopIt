import { IoMdSend } from "react-icons/io";
import { IoMdAttach } from "react-icons/io";
export default function MessageCard({ selectedChat }) {
  return (
    <>
      <div className="text-sm flex flex-col gap-3 px-2 h-[500px] overflow-y-auto">
        {/* chat header */}
        <div className="bg-white w-full px-2 py-1 shadow-md flex items-center justify-between">
          <div>
            {!selectedChat?.isGroupChat
              ? selectedChat?.users[1]?.firstName +
                " " +
                selectedChat?.users[1]?.lastName
              : selectedChat?.chatName}
          </div>
          <img
            src={selectedChat?.users[1]?.profilePicture}
            alt="..."
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="bg-blue-50 px-2 py-3 shadow-md w-[70%]">
          <p>
            This is my humble request. Please follow up on the uncompleted
            orders today. I need to attend to my clients
          </p>
        </div>
        <div className="bg-pink-50 px-2 py-3 shadow-md w-[70%] flex flex-col self-end">
          <p>
            Noted. Im off to the field right now. Will check and give you a
            response before noon. Please be patient as we work on reinstating
            your subscription
          </p>
        </div>

        <div className="bg-blue-50 px-2 py-3 shadow-md w-[70%]">
          <p>
            This is my humble request. Please follow up on the uncompleted
            orders today. I need to attend to my clients
          </p>
        </div>
        <div className="bg-pink-50 px-2 py-3 shadow-md w-[70%] flex flex-col self-end">
          <p>
            Noted. Im off to the field right now. Will check and give you a
            response before noon. Please be patient as we work on reinstating
            your subscription
          </p>
        </div>
        <div className="bg-pink-50 px-2 py-3 shadow-md w-[70%] flex flex-col self-end">
          <p>
            Noted. Im off to the field right now. Will check and give you a
            response before noon. Please be patient as we work on reinstating
            your subscription
          </p>
        </div>
        <div className="bg-blue-50 px-2 py-3 shadow-md w-[70%]">
          <p>
            This is my humble request. Please follow up on the uncompleted
            orders today. I need to attend to my clients
          </p>
        </div>
        <div className="bg-white w-full bottom-0 sticky flex items-center">
          <IoMdAttach className="h-7 w-7" />
          <input
            type="text"
            id="message"
            placeholder="Type your message"
            className="flex-1 focus:bg-blue-50"
          />
          <button>
            <IoMdSend className="h-7 w-7" />
          </button>
        </div>
      </div>
    </>
  );
}

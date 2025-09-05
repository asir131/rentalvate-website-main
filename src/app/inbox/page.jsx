"use client";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Paperclip, Send } from "lucide-react";

const dummyData = [
  {
    userName: "Yamin Hossain",
    lastMessage: "Hi",
    messageArrivalTime: "Just now",
  },
  {
    userName: "Asir",
    lastMessage: "Front end loading",
    messageArrivalTime: "3 min ago",
  },
  {
    userName: "Sakib",
    lastMessage: "Everything alright?",
    messageArrivalTime: "Yesterday",
  },
  {
    userName: "Tanim",
    lastMessage: "Back end loading",
    messageArrivalTime: "3 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
  {
    userName: "Anik",
    lastMessage: "Need Help!",
    messageArrivalTime: "7 days ago",
  },
];

const InboxPage = () => {
  const [activeChat, setActiveChat] = useState(null);
  const fileUploadingInputField = useRef(null);
  const fileUploadHandler = () => {
    fileUploadingInputField.current.click();
  };

  return (
    <section className="max-w-7xl mx-auto flex mt-6 px-2 gap-4 min-h-screen">
      {/* People list Panel */}
      <div
        className={`w-full md:w-1/3 h-screen sticky top-0 rounded-md overflow-y-auto transition-transform duration-300
          ${activeChat ? "hidden md:block" : "block"}`}
      >
        <h1 className="border-b-2 pb-4 border-gray-800 text-center text-2xl md:text-3xl text-gray-700 bg-white sticky top-0 z-10">
          Messages
        </h1>
        {dummyData.map((message, index) => (
          <div
            key={index}
            onClick={() => setActiveChat(message)} // open chat
            className={`flex gap-2 px-3 py-2 md:px-4 md:py-3 rounded-md my-1 md:my-2 
              border border-transparent hover:border-gray-300 hover:bg-gray-100 
              transition-colors duration-200 cursor-pointer ${
                index === 0 && "bg-gray-100 border-gray-300"
              }`}
          >
            <Avatar className="size-10 md:size-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{message?.userName[0]}</AvatarFallback>
            </Avatar>
            <div className="w-full min-w-0">
              <div className="flex justify-between items-center">
                <h1 className="font-medium md:font-semibold truncate">
                  {message.userName}
                </h1>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  {message?.messageArrivalTime}
                </p>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {message?.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Messages Panel */}
      <div
        className={`w-full rounded-md border flex-col transition-transform duration-300
          ${activeChat ? "flex" : "hidden"} md:flex`}
      >
        {/* Header */}
        <div className="bg-white h-16 rounded-t-md flex items-center gap-2 px-4 sticky top-0 z-10 border-b">
          {/* Back button for mobile */}
          <button
            className="md:hidden mr-2"
            onClick={() => setActiveChat(null)}
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>

          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{activeChat?.userName?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base md:text-xl font-semibold">
              {activeChat?.userName}
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Last seen: 4 hours ago
            </p>
          </div>
        </div>

        {/* Conversations */}
        <div className="h-full p-3 md:p-4 bg-accent overflow-y-scroll">
          {Array.from({ length: 20 }).map((_, index) => (
            <p
              key={index}
              className={`rounded-md max-w-[80%] md:max-w-xl p-2 md:p-4 mb-2 md:mb-4 break-words text-sm md:text-base ${
                index % 2 === 0
                  ? "ms-auto bg-[#8C3800] text-white rounded-br-none"
                  : "bg-white text-gray-600 rounded-tl-none"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. Enim non sit varius in
              volutpat amet nisl. Faucibus lacus elit faucibus tempus
              scelerisque.
            </p>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-2 border-t bg-white sticky bottom-0 flex items-center gap-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-6 focus:outline-none focus:ring-2 focus:ring-primary w-full"
            />
            <Paperclip
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#6C6C6C]"
              onClick={fileUploadHandler}
            />
            <input
              type="file"
              className="hidden"
              ref={fileUploadingInputField}
            />
          </div>
          <button className="bg-primary text-white p-3 rounded-full">
            <Send />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InboxPage;

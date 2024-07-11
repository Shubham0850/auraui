import React, { useState } from "react";
import { FiMessageSquare, FiUser, FiX } from "react-icons/fi";

interface ChatIconProps {
  className?: string;
}

const ChatIcon: React.FC<ChatIconProps> = ({ className }) => (
  <FiMessageSquare className={className} size={30} />
);

interface MessageIconProps {
  iconType: "ai" | "user";
}

const MessageIcon: React.FC<MessageIconProps> = ({ iconType }) => {
  const icons = {
    ai: <FiUser className="text-black" size={20} />,
    user: <FiUser className="text-black" size={20} />,
  };
  return icons[iconType] || null;
};

interface ChatMessageProps {
  sender: string;
  message: string;
  iconType: "ai" | "user";
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  message,
  iconType,
}) => (
  <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
      <div className="rounded-full bg-gray-100 border p-1">
        <MessageIcon iconType={iconType} />
      </div>
    </span>
    <p className="leading-relaxed">
      <span className="block font-bold text-gray-700">{sender}</span>
      {message}
    </p>
  </div>
);

const SupportChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative bg-white h-screen">
      <div>
        <button
          className="absolute bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-black cursor-pointer border-gray-200 p-0 hover:text-gray-900"
          type="button"
          onClick={toggleChat}
        >
          <ChatIcon className="text-gray-600" />
        </button>

        {isChatOpen && (
          <div
            className="absolute bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
            style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
          >
            <div className="flex flex-col space-y-1.5 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-800">
                  Aura Chatbot
                </h2>
                <button
                  className="p-1 -m-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  onClick={toggleChat}
                >
                  <FiX size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-3">
                Powered by Aura and GPT-4
              </p>
            </div>

            <div className="pr-4 h-[485px] overflow-auto">
              <ChatMessage
                sender="AI"
                message="Hi, how can I help you today?"
                iconType="ai"
              />
              <ChatMessage sender="You" message="fewafef" iconType="user" />
              <ChatMessage
                sender="AI"
                message="Sorry, I couldn't find any information in the documentation about that. Expect answer to be less accurateI could not find the answer to this in the verified sources."
                iconType="ai"
              />
            </div>

            <div className="flex items-center pt-0">
              <form className="flex items-center justify-center w-full space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-black focus-visible:ring-offset-2 bg-white"
                  placeholder="Type your message"
                />
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-gray-800 hover:bg-[#111827E6] h-10 px-4 py-2">
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportChat;

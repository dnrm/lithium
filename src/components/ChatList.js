import React from "react";

const ChatList = ({ name, message, src }) => {
  return (
    <div className="w-full flex justify-between items-center gap-4 hover:bg-gray-100 px-4 py-3 font-space-grotesk">
      <div className="flex gap-4">
        <div className="photo">
          <img src={src} alt="" className="object-cover h-14 w-14 rounded-full" />
        </div>
        <div className="contact-details">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{message}</p>
        </div>
      </div>
      <div className="options bg-gray-200 p-3 rounded-xl hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChatList;

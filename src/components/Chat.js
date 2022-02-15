import React from "react";

const Chat = () => {
  return (
    <div className="w-full h-full">
        <div className="messages h-full">
            <h1>a</h1>
        </div>
      <div className="text-box border-2 w-full p-4 bg-gray-200 flex justify-center items-center gap-2 h-16">
        <input
          type="text"
          className="w-full rounded-lg p-2 bg-white"
          placeholder="Type your message here :)"
        />
        <button className="bg-white p-2 rounded-xl">
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;

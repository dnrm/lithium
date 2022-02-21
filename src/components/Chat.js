import React from "react";

const Chat = () => {
  return (
    <div className="w-full h-full bg-gray-900 col-span-4 md:col-span-3">
      <div className="messages h-[92.6vh] text-white bottom-0">
        <h1>a</h1>
      </div>
      <div className="text-box w-full py-2 px-3 bg-gray-600 flex justify-center items-center gap-2 h-16">
        <input
          type="text"
          className="w-full rounded-lg p-2 text-sm bg-gray-900 text-white"
          placeholder="Type your message here :)"
        />
        <button className="bg-gray-900 p-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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

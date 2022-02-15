import React from "react";
import ChatList from "./ChatList";

const Sidebar = () => {
  return (
    <div className="w-[36em] bg-gray-50 h-screen">
      <div className="p-4 heading shadow-sm">
        <h1 className="font-thin font-space-grotesk text-2xl">RageChat</h1>
      </div>
      <div className="chats h-full pt-2">
        <ChatList
          name="Thomas"
          message={"Hi!"}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
        />
        <ChatList
          name="Daniel"
          message={"Hi!"}
          src="https://cdn.medina.dev/dnrm.jpg"
        />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import ChatList from "./ChatList";

const Sidebar = () => {
  return (
    <div className="w-full bg-gray-800 h-screen text-white hidden md:block col-span-1">
      <div className="px-4 pt-4 heading shadow-sm">
        <h1 className="font-thin font-space-grotesk text-2xl">Lithium</h1>
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

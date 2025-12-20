import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-2 px-2 py-1">
      <img
        className="h-6 w-6 rounded-full"
        alt="profile"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <div className="text-sm">
        <span className="font-semibold mr-1">{name}</span>
        <span className="text-gray-700">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;

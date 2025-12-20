import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatLiveMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="flex flex-col h-[600px] ml-2 border border-gray-300 rounded-lg bg-slate-100">
     
      <div className="flex-1 p-2 overflow-y-scroll flex flex-col-reverse">
        {chatLiveMessages.map((m, i) => (
          <ChatMessage key={i} name={m.name} message={m.message} />
        ))}
      </div>

      <form
        className="flex items-center gap-2 p-2 border-t bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;

          dispatch(
            addMessage({
              name: "Akshay Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-1 px-3 py-2 border rounded-full focus:outline-none"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

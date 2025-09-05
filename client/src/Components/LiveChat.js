import React, { useState,useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const LiveChat = () => {
  const dispatch = useDispatch();
   const [liveMessage, setLiveMessage] = useState("");

  const chatLiveMessages = useSelector((store)=>store.chat.message)
  useEffect(() => {
    const timer = setInterval(() => {
     
      dispatch(addMessage({
        name: generateRandomName(),
        message:makeRandomMessage(10)
      }))
      
    }, 500)
    
    return () => {
      clearTimeout(timer)
    }
   
 },[])
  
  
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatLiveMessages.map((m, i) => (
            <ChatMessage key={i} name={m.name} message={m.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

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
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
}

export default LiveChat
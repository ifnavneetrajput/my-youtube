import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
        className="col-span-1 h-8"
        alt="profile logo"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <span className='font-bold px-2'>{name}</span>
      <span >{message}</span>
    </div>
  );
}

export default ChatMessage
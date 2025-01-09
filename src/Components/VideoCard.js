import React from 'react'

const VideoCard = ({ id, thumbnail, channelTitle, title, views }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnail} />
      <ul className="px-2">
        <li className="font-bold ">{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.floor(views/1000)}K views</li>
      </ul>
    </div>
  );
};

export default VideoCard
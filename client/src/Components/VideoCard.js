import React from "react";

const VideoCard = ({ id, thumbnail, channelTitle, title, views }) => {
  return (
    <div className="w-72 m-2 cursor-pointer">
    
      <img
        className="rounded-xl w-full object-cover hover:rounded-lg transition-all duration-200"
        alt="thumbnail"
        src={thumbnail}
      />

   
      <div className="mt-2 px-1">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>

        <p className="text-gray-600 text-xs mt-1">{channelTitle}</p>

        <p className="text-gray-600 text-xs">
          {Math.floor(views / 1000)}K views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

import React from 'react'

const VideoCard = ({ id, thumbnail, channelTitle, title, views }) => {
  return (
    <div className="mx-4 my-6">
      <img alt="thumbnail" src={thumbnail} />
      <div className='flex flex-wrap h-10 w-4'>
        <h1>{title}</h1>
      </div>
      <h1>{views}</h1>
      <h1>{channelTitle}</h1>
    </div>
  );
};

export default VideoCard
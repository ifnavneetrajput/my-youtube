import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const popularVideosData = useSelector(
    (store) => store.popularVideos.popularVideos
  );
   console.log(popularVideosData);
  
  return (
    <div className=' flex flex-wrap mx-7 my-8'>
      {popularVideosData?.map((video) => {
     
        const { snippet, statistics, id } = video;
        const { thumbnails, channelTitle, title } = snippet;
        const { viewCount } = statistics;

        return (
          <VideoCard
            key={id} 
            id={id}
            thumbnail={thumbnails.medium.url}
            channelTitle={channelTitle}
            title={title}
            views={viewCount}
          />
        );
      })}
    </div>
  );
}

export default VideoContainer
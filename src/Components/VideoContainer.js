import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const popularVideosData = useSelector(
    (store) => store.popularVideos.popularVideos
  );
 

  return (
    <div className="flex flex-wrap mx-7 my-8">
      {popularVideosData?.map((video) => {
        const { snippet, statistics, id } = video;
        const { thumbnails, channelTitle, title } = snippet;
        const { viewCount } = statistics;

        return (
          <Link key={id} to={`/watch?v=${id}`}>
            <VideoCard
              id={id}
              thumbnail={thumbnails.medium.url}
              channelTitle={channelTitle}
              title={title}
              views={viewCount}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

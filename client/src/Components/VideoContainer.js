import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const popularVideosData = useSelector(
    (store) => store.popularVideos.popularVideos
  );

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularVideosData?.map((video) => {
          const { snippet, statistics, id } = video;
          const { thumbnails, channelTitle, title } = snippet;

          return (
            <Link key={id} to={`/watch?v=${id}`} className="block">
              <VideoCard
                id={id}
                thumbnail={thumbnails.medium.url}
                channelTitle={channelTitle}
                title={title}
                // views={statistics?.viewCount}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;

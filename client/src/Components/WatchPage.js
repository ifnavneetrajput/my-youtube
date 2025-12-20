import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full px-4">
  
      <div className="flex w-full gap-4">
        
        <div className="flex-[3]">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${params.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-6">
            <CommentsContainer />
          </div>
        </div>


        <div className="flex-[1] hidden lg:block">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

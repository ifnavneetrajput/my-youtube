import { useEffect, useCallback } from "react";
import { APIKEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/popularVideosSlice";

const usePopularVideos = () => {
  const dispatch = useDispatch();

  
  const getPopularVideos = useCallback(async () => {
    try {
      const data = await fetch(APIKEY);
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    } catch (err) {
      console.log("error is ", err);
    }
  }, [dispatch]); 

  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]);
};

export default usePopularVideos;

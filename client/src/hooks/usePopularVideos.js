import { useEffect, useCallback } from "react";
import { API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/popularVideosSlice";

const usePopularVideos = () => {
  const dispatch = useDispatch();

  // Wrap your function in useCallback so it can be safely added to useEffect dependencies
  const getPopularVideos = useCallback(async () => {
    try {
      const data = await fetch(API);
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    } catch (err) {
      console.log("error is ", err);
    }
  }, [dispatch]); // ✅ only changes if dispatch changes (never happens)

  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]); // ✅ now ESLint is fully satisfied
};

export default usePopularVideos;

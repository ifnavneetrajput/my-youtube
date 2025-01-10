import { useEffect } from 'react';
import { API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularVideos } from '../utils/popularVideosSlice';

const usePopularVideos = () => {
  const dispatch = useDispatch();
  const getPoularVideos = async () => {
    try {
      const data = await fetch(API)
      const json = await data.json();
 
      dispatch(addPopularVideos(json.items));
    } catch (err) {
      console.log("error is ", err);
    }
  }
  useEffect(() => {
    getPoularVideos();
  },[])
  
}

export default usePopularVideos;
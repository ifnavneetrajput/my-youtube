export const APIKEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_AUTO_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

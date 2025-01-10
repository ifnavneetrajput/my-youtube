
import appSlice from "./appSlice";
import popularVideos from './popularVideosSlice'
import searchSlice from './searchSlice'
// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    popularVideos: popularVideos,
     search: searchSlice,
  },
});

export default appStore;

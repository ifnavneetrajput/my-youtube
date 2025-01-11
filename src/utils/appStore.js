import appSlice from "./appSlice";
import popularVideos from "./popularVideosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    popularVideos: popularVideos,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;

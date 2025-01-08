import { createSlice } from "@reduxjs/toolkit";


const PopularVideos = createSlice({
  name: 'popularVideos',
  initialState: {
    popularVideos:[],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    }
  }
})
export const { addPopularVideos } = PopularVideos.actions;
export default PopularVideos.reducer;
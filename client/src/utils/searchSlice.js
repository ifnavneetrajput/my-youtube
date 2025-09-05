import { createSlice } from "@reduxjs/toolkit";
import { cache } from "react";

const searchSlice = createSlice({
  name: cache,
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
         state = Object.assign(state, action.payload);
    }
  }
})
export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
      if (state.message.length > 25) {
        state.message.shift();
      }
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

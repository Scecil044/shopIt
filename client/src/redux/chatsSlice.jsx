import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  selectedChat: {},
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { setSelectedChat, chats } = chatsSlice.actions;
export default chatsSlice.reducer;

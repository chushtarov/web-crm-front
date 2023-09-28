// chatSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

interface Chat {
  _id: string;
  name: string;
  participants: []
}

interface ChatState {
  chats: Chat[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ChatState = {
  chats: [],
  status: "idle",
  error: null,
};

export const fetchChats = createAsyncThunk("chat/fetchChats", async () => {
  const response = await axios.get("http://localhost:3000/api/chats");

  return response.data;

});


const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectChats = (state: RootState) => state.chat.chats;

export default chatSlice.reducer;

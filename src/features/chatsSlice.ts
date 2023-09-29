// chatSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

interface Chat {
  _id: string;
  name: string;
  participants: string[]
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

export const addParticipant = createAsyncThunk(
  "chat/addParticipant",
  async ({ chatId, userId }: { chatId: string; userId: string }) => {
    const response = await axios.post(
      `http://localhost:3000/api/chats/${chatId}/participants`,
      { userId }
    );
    return response.data;
  }
);


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
      })
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Обновите информацию о чате после успешного добавления пользователя
        const chatId = action.payload._id;
        const updatedChats = state.chats.map((chat) =>
          chat._id === chatId ? action.payload : chat
        );
        state.chats = updatedChats;
      })
      .addCase(addParticipant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectChats = (state: RootState) => state.chat.chats;

export default chatSlice.reducer;

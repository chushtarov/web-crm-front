// messageSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";
import { useParams } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  chat: string;
  sender: string;
  timestamp: string;
  day: string;
}

interface MessageState {
  messages: Message[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  status: "idle",
  error: null,
};

export const fetchMessages = createAsyncThunk(
  "messages/getMessage",
  async (chatId: string, { getState }) => {
    const state = getState() as RootState;
    const token = state.signInSlice.token;
    

    const response = await axios.get(
      `http://localhost:3000/api/chats/${chatId}/messages`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
    }
    );
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  "messages/createMessage",
  async (message: Message, { getState }) => {
    const state = getState() as RootState;
    const token = state.signInSlice.token;

    const response = await fetch(
      `http://localhost:3000/api/chats/${message.chat}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(message),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
);

export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (
    { chatId, messageId }: { chatId: string; messageId: string },
    { getState }
  ) => {
    const state = getState() as RootState;
    const token = state.signInSlice.token;

    const response = await fetch(
      `http://localhost:3000/api/chats/${chatId}/messages/${messageId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to delete message: ${response.status} ${response.statusText}`
      );
    }

    return { messageId };
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = [...state.messages, action.payload];
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { messageId } = action.payload;
        state.messages = state.messages.filter(
          (message) => message._id !== messageId
        );
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectMessages = (state: RootState) => state.messages.messages;

export default messageSlice.reducer;

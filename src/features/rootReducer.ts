import { combineReducers } from "redux";
import signInSlice from "./signInSlace";
import usersSlice from "./usersSlice";
import chatsSlice from "./chatsSlice";
import messagesSlice from "./messagesSlice";

const rootReducer = combineReducers({
  signInSlice: signInSlice,
  usersSlice: usersSlice,
  chat: chatsSlice,
  messages: messagesSlice
});

export default rootReducer;

import { combineReducers } from "redux";
import signInSlice from "./signInSlace";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
  signInSlice: signInSlice,
  usersSlice: usersSlice,
});

export default rootReducer;

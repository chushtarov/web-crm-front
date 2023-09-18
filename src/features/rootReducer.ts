import { combineReducers } from "redux";
import signInSlice from "./signInSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
    signInSlice: signInSlice,
  usersSlice: usersSlice,
});

export default rootReducer;

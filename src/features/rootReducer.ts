import { combineReducers } from "redux";
import signInSlice from "./signInSlace";
import usersSlice from "./usersSlice";
import cardSlicer from "./cardSlicer";

const rootReducer = combineReducers({
  signInSlice: signInSlice,
  usersSlice: usersSlice,
  cardSlicer: cardSlicer,
});

export default rootReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {RootState} from '../app/store'
type card = {
  _id: number;
    img: string;
    text:string;
    openCard: boolean;
}

type stateProp = {
    card: card[],
}
const initialState:stateProp = {
  card: []
};

export const fetchCard = createAsyncThunk("card/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/card");
    const logRes = await res.json();
    return logRes;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

 const cardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCard.fulfilled, (state, action) => {
      state.card = action.payload;
    })
}});

export default cardSlice.reducer;

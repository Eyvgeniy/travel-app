/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "models/RootState";
import routes from "../routes";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null
  } as UserState,
  reducers: {
    signIn(state, action) {
      const { data } = action.payload;
      return { ...state, currentUser: data };
    },
    signUp(state, action) {
      const { data } = action.payload;
      return { ...state, currentUser: data };
    },
    logOut(state, action) {
      const { data } = action.payload;
      return { ...state, currentUser: null };
    },
  },
});

export const {
  signIn,
  signUp,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;

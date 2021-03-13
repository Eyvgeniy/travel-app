/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";

/*const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    actualId: null,
    list: [],
    currentCountry: {},
  },
  reducers: {
    addCountries(state, action) {
      const { data } = action.payload;
      return { ...state, list: data };
    },
    selectCountry(state, action) {
      const { id } = action.payload;
      return { ...state, actualId: id };
    },
    addCurrentCountry(state, action) {
      const { data } = action.payload;
      return { ...state, currentCountry: data };
    },
  },
});

export const {
  addCountries,
  selectCountry,
  addCurrentCountry,
} = countriesSlice.actions;
export default countriesSlice.reducer;
*/
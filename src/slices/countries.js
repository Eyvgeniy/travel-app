/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";

const initId = 1;

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    actualId: initId,
  },
  reducers: {
    getCountries(state, action) {
      const { data } = action.payload;
      return [...data];
    },
  },
});

export const { getCountries } = countriesSlice.actions;
export default countriesSlice.reducer;

export const fetchCountries = async (dispatch) => {
  const route = routes.getCountries();
  try {
    const { data } = await axios.get(route);
    dispatch(getCountries({ data }));
  } catch (err) {
    throw new Error({ error: err.message });
  }
};

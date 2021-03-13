/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    actualId: null,
    list: [],
    currentCountry: {},
    loading: "idle",
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

export const fetchCountriesData = (dispatch) => async (lang) => {
  try {
    const { data } = await axios.get(routes.getCountries(lang));
    await dispatch(addCountries({ data }));
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlacesData = (dispatch) => async (lang, id) => {
  try {
    const { data } = await axios.get(routes.getCountry(id, lang));
    dispatch(addCurrentCountry({ data }));
  } catch (err) {
    console.error(err);
  }
};

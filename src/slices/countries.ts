/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";

export const fetchData = createAsyncThunk(
  "countries/fetchDataStatus",
  async (lang: string, { rejectWithValue }): Promise<unknown> => {
    try {
      const { data } = await axios.get(routes.getCountries(lang));
      return data;
    } catch (err) {
      const error = err;
      // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchСountryData = createAsyncThunk(
  "countries/fetchCountryDataStatus",
  async (
    { id, lang }: { id: string; lang: string },
    { rejectWithValue },
  ): Promise<unknown> => {
    try {
      const { data } = await axios.get(routes.getCountry(id, lang));
      return data;
    } catch (err) {
      const error = err;
      // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  },
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    actualId: null,
    list: [],
    currentCountry: {},
    loading: "idle",
  },
  reducers: {
    selectCountry(state, action) {
      const { id } = action.payload;
      return { ...state, actualId: id };
    },
    addCurrentCountry(state, action) {
      const { data } = action.payload;
      return { ...state, currentCountry: data };
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.loading = "idle";
    },
    [fetchData.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchData.rejected]: (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
      console.log(action);
      state.loading = "idle";
    },
    [fetchСountryData.fulfilled]: (state, action) => {
      state.currentCountry = action.payload;
      state.loadingCountry = "idle";
    },
    [fetchСountryData.pending]: (state) => {
      state.loadingCountry = "pending";
    },
    [fetchСountryData.rejected]: (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
      console.log(action);
      state.loadingCountry = "idle";
    },
  },
});

export const { selectCountry } = countriesSlice.actions;
export default countriesSlice.reducer;

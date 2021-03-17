/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryShortModel } from "models/Country/Country";
import { useHistory } from "react-router-dom";
import routes from "../routes";

interface MyKnownError {
  errorMessage: string;
}

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
  // {
  //   condition: (lang, { getState }) => {
  //     const currentLang = getState().lang;
  //     const { countries } = getState();

  //     if (lang === currentLang && countries.list.length > 0) {
  //       // Already fetched or in progress, don't need to re-fetch
  //       return false;
  //     }
  //   },
  // },
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
    loading: "idle",
    currentCountry: {},
    loadingCountry: "idle",
    filter: "",
    error: null,
  },
  reducers: {
    selectCountry(state, action) {
      const { id } = action.payload;
      return { ...state, actualId: id };
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.list = action.payload as Array<CountryShortModel>;
      state.loading = "idle";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      if (action.payload) {
        const payload: {errorMessage: string} = action.payload as {errorMessage: string}
        state.error = payload.errorMessage ;
      } else {
        state.error = action.error.message;
      }
      state.loading = "idle";
    });
    builder.addCase(fetchСountryData.pending, (state) => {
      state.loadingCountry = "pending";
    });
    builder.addCase(fetchСountryData.fulfilled, (state, action) => {
      state.currentCountry = action.payload;
      state.loadingCountry = "idle";
    });
    builder.addCase(fetchСountryData.rejected, (state, action) => {
      if (action.payload) {
        const payload: {errorMessage: string} = action.payload as {errorMessage: string}
        state.error = payload.errorMessage ;
      } else {
        state.error = action.error.message;
      }
      console.log(action);
      state.loadingCountry = "idle";
    });
  },
  // {
  //   [fetchData.fulfilled]: (state, action) => {
  //     state.list = action.payload;
  //     state.loading = "idle";
  //   },
  //   [fetchData.pending]: (state) => {
  //     state.loading = "pending";
  //   },
  //   [fetchData.rejected]: (state, action) => {
  //     if (action.payload) {
  //       // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
  //       state.error = action.payload.errorMessage;
  //     } else {
  //       state.error = action.error.message;
  //     }
  //     console.log(action);
  //     state.loading = "idle";
  //   },
  //   [fetchСountryData.fulfilled]: (state, action) => {
  //     state.currentCountry = action.payload;
  //     state.loadingCountry = "idle";
  //   },
  //   [fetchСountryData.pending]: (state) => {
  //     state.loadingCountry = "pending";
  //   },
  //   [fetchСountryData.rejected]: (state, action) => {
  //     if (action.payload) {
  //       // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
  //       state.error = action.payload.errorMessage;
  //     } else {
  //       state.error = action.error.message;
  //     }
  //     console.log(action);
  //     state.loadingCountry = "idle";
  //   },
  // },
});

export const { selectCountry, changeFilter } = countriesSlice.actions;
export default countriesSlice.reducer;

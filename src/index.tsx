import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import routes from "./routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import "bootstrap/dist/css/bootstrap.min.css";


  // const f = async () => {
  //   try {
  //     const res = await fetch(routes.getCountries());
  //     const data = await res.json();

  //     return await { countries: data };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const countries = await f();
  // const preloadedState = countries || {
  //   countries: {
  //     list: [],
  //     actualId: null,
  //   },
  // };

const store = configureStore({
  reducer: rootReducer,
  // preloadedState,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import routes from "./routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import "bootstrap/dist/css/bootstrap.min.css";

const init = async () => {
  const rootEl = document.getElementById("root");

  const f = async () => {
    const res = await fetch(routes.getCountries());
    const data = await res.json();

    return await { countries: data };
  };
  const preloadedState = await f();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};
init();

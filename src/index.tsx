import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import routes from "./routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { changeLang } from "./slices/lang";
import "bootstrap/dist/css/bootstrap.min.css";

const init = async () => {
  const windowData = Object.fromEntries(
    new URL(window.location).searchParams.entries(),
  );

  const VALID_KEYS = ["lang"];
  const mapKeys = {
    lang: changeLang,
  };

  const store = configureStore({
    reducer: rootReducer,
    // preloadedState,
  });

  VALID_KEYS.forEach((key) => {
    if (windowData[key]) {
      store.dispatch(mapKeys[key](windowData[key]));
    }
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"),
  );
};
init();

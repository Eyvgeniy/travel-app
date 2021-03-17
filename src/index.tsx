import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { changeLang } from "./slices/lang";
import "./components/i18n";
import "bootstrap/dist/css/bootstrap.min.css";

const init = async () => {
  const windowData = Object.fromEntries(
    new URL(window.location.href.split("/#").join("")).searchParams.entries(),
  );

  const VALID_KEYS = ["lang"];
  const mapKeys = {
    lang: changeLang,
  };

  console.log(window.location.href.split("/#").join(""));

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
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>,
    document.getElementById("root"),
  );
};
init();

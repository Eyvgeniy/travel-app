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

  const mapKeys = {
    lang: changeLang,
  };

  console.log(window.location.href.split("/#").join(""));

  const store = configureStore({
    reducer: rootReducer,
    // preloadedState,
  });

  if (windowData["lang"]) {
    store.dispatch(mapKeys.lang((windowData["lang"])));
  }
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

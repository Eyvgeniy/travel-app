import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.getElementById("root");
fetch(routes.getCountries())
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => console.log(err.message));
render(<App />, rootEl);

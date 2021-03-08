import * as React from "react";
import { hot } from "react-hot-loader";
import {Cards} from "./cards/Cards"
import {Header} from "./header/Header"
//import {Slider} from "./slider/Slider"
import "./../assets/scss/App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <Cards />
        <footer></footer>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);

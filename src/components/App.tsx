import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Cards } from "./cards/Cards";
import { Header } from "./header/Header";
// import { Slider } from "./slider/Slider";
import Countries from "../pages/Сountries";
import Country from "../pages/Country";
import "../../public/assets/scss/App.scss";

export class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/">
              <Countries />
            </Route>
          </Switch>
          <footer></footer>
        </Router>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);

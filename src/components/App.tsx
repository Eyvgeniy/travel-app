import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Cards } from "./cards/Cards";
import { Header } from "./header/Header";
// import { Slider } from "./slider/Slider";
import Countries from "../pages/Сountries";
import Country from "../pages/Country";
import Footer from "./footer/Footer";
import "../../public/assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app mx-auto">
        <Router>
          <Header />
          <Switch>
            <Route path="/country/:id">
              <Country />
            </Route>
            <Route path="/">
              <Countries />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);

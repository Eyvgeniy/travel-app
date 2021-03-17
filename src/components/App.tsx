import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { Cards } from "./cards/Cards";
import { Header } from "./header/Header";
// import { Slider } from "./slider/Slider";
import Countries from "../pages/Сountries";
import Country from "../pages/Country";
import Footer from "./footer/Footer";
import "../../public/assets/scss/App.scss";
import RegisterForm from "./RegisterForm/RegisterForm";

export class App extends React.Component<Record<string, unknown>, {}> {
  public render() {
    return (
      <div className="app mx-auto">
        <Router>
          <Header />
          <Switch>
            <Route path="/country/:id">
              <Country />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>

            <Route exact path="/">
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

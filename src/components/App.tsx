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
import RegisterForm from "./RegisterForm/RegisterForm";
import { withCookies, Cookies } from 'react-cookie';
import { Auth } from "../AppConstants";
import axios from "axios";
import routes from "../routes";
import { UserModel } from "models/User/User";
import { connect, useDispatch } from "react-redux";
import { updateCurrentUser } from "../slices/user";
import { RootState } from "models/RootState";
import LoginForm from "./LoginForm/LoginForm";

interface AppProps {
  cookies: Cookies,
  updateUser: (user: UserModel) => Promise<void>
};
interface AppState {
  showLogInDialog: boolean
}
class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props);
    this.state = {
      showLogInDialog: false
    }
  }

  async componentDidMount(){
    const { cookies } = this.props;
    const token = cookies.get(Auth.COOKIE_TOKEN);
    if(token){
      const data = await axios.get(routes.checkValidity(token),{params:{token}});
      const user = data.data as UserModel;
      if(user){
        cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
      
        this.props.updateUser(user);
      }
    }
  }

  handleShowDialogClick = (state: boolean) => {
    this.setState({
      showLogInDialog: state
    })
  }

  public render() {
    const {showLogInDialog} = this.state;
    return (
      <div className="app mx-auto">
        <Router>
          <Header onLogInClick={() => this.handleShowDialogClick(true)}/>
          <Switch>
            <Route path="/country/:id">
              <Country />
            </Route>
            <Route path="/register">
              <RegisterForm/>
            </Route>

            <Route exact path="/">
              <Countries />
            </Route>
          </Switch>
          <Footer />
          <LoginForm
            show={showLogInDialog}
            onShowChange={this.handleShowDialogClick}
          />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function, ownProps: {cookies: Cookies}) => {
  return ({
      updateUser: (user: UserModel) => dispatch(updateCurrentUser(user)),
      cookies: ownProps.cookies
  });
};
//@ts-ignore
export default hot(module)(withCookies(connect(null, mapDispatchToProps)(App)));

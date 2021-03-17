import * as React from "react";
import { Auth } from "../../AppConstants";
import { RootState } from "models/RootState";
import { Cookies, withCookies } from "react-cookie";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "../../slices/user";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

interface UserInfoProps {
  cookies: Cookies;
  onLogInClick: () => void;
}

const UserInfo = ({ cookies, onLogInClick }: UserInfoProps): JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => ({
    user: state.user.currentUser,
  }));
  const history = useHistory();
  const { t } = useTranslation();

  const handleOnLogIn = () => {
    onLogInClick();
  };
  const handleOnRegister = () => {
    history.push(`/register`);
  };

  const handleOnLogOut = async () => {
    cookies.remove(Auth.COOKIE_TOKEN);
    await dispatch(logOut(null));
  };

  return (
    <>
      {user && (
        <>
          <img
            src="../../../public/assets/images/user-icon.png"
            alt="user-info"
            style={{ width: "6%" }}
          />
          <span>{user.username}</span>
          <button
            className="btn btn-outline-secondary mr-1"
            onClick={handleOnLogOut}
          >
            Log Out
          </button>
        </>
      )}
      {!user && (
        <>
          <button
            className="btn btn-outline-secondary mr-1"
            onClick={handleOnLogIn}
          >
            {t("signIn")}{" "}
          </button>
          <button
            className="btn btn-outline-secondary mr-1"
            onClick={handleOnRegister}
          >
            {t("signUp")}
          </button>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState, ownProps: { cookies: Cookies }) => {
  return {
    state: state,
    cookies: ownProps.cookies,
  };
};

export default withCookies(connect(mapStateToProps, null)(UserInfo));

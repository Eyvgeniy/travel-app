import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import routes from "../../routes";
import { updateCurrentUser } from "../../slices/user";
// import styles from "./RegisterForm.module.scss";
import { Cookies, withCookies } from "react-cookie";
import { RootState } from "models/RootState";
import { Auth } from "../../AppConstants";
import { UserModel } from "models/User/User";
import { useHistory } from "react-router-dom";
import "./RegisterForm.css";
import { useTranslation } from "react-i18next";
interface RegisterFormProps {
  cookies: Cookies;
}

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();
  const { cookies } = props;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await axios.post(routes.signUp(userName, passWord), {
        username: userName,
        password: passWord,
      });

      const user = data.data as UserModel;
      cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
      await dispatch(updateCurrentUser(data));
      history.push(`/`);
      setSubmitting(false);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setSubmitting(false);
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(event.target.value);
  };
  return (
    <div className="main">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUserName">
          <Form.Label>{t("user")}</Form.Label>
          <Form.Control
            defaultValue={userName}
            type="text"
            placeholder={t("Enter user name")}
            onChange={handleUserNameChange}
            onFocus={() => setErrorMessage(null)}
            disabled={isSubmitting}
          />
        </Form.Group>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <Form.Group controlId="formPassword">
          <Form.Label>{t("password")}</Form.Label>
          <Form.Control
            defaultValue={passWord}
            type="password"
            placeholder={t("Type Password")}
            onChange={handlePasswordChange}
            autoComplete="Off"
            required
            disabled={isSubmitting}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {t("submit")}
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: { cookies: Cookies }) => {
  return {
    state: state,
    cookies: ownProps.cookies,
  };
};

export default withCookies(connect(mapStateToProps, null)(RegisterForm));

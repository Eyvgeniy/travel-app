import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import routes from "../../routes";
import { updateCurrentUser } from "../../slices/user";
import { Cookies, withCookies } from "react-cookie";
import { RootState } from "models/RootState";
import { Auth } from "../../AppConstants";
import { UserModel } from "models/User/User";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  cookies: Cookies;
  show: boolean;
  onShowChange: (state: boolean) => void;
}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { cookies } = props;

  const handleClose = () => {
    setError(null);
    setUserName("");
    setPassWord("");
    props.onShowChange(false);
  };

  const handleShow = () => props.onShowChange(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await axios.post(routes.signIn(userName, passWord), {
        username: userName,
        password: passWord,
      });
      const user = data.data as UserModel;
      cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
      await dispatch(updateCurrentUser(user));
      handleClose();
      setSubmitting(false);
    } catch (err) {
      setSubmitting(false);
      setError(err.response.data.reason);
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(event.target.value);
  };

  return (
    <div>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("logIn")}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                type="text"
                placeholder={t("Enter user name")}
                aria-describedby="inputGroup-sizing-default"
                onChange={handleUserNameChange}
                required
                disabled={isSubmitting}
                onFocus={() => setError(null)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                defaultValue={passWord}
                type="password"
                placeholder={t("Type Password")}
                aria-describedby="inputGroup-sizing-default"
                onChange={handlePasswordChange}
                required
                disabled={isSubmitting}
                onFocus={() => setError(null)}
              />
            </InputGroup>
            {error && <p className="text-danger">{error}</p>}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t("close")}
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {t("submit")}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: { cookies: Cookies }) => {
  return {
    state: state,
    cookies: ownProps.cookies,
  };
};

export default withCookies(connect(mapStateToProps, null)(LoginForm));

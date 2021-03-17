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

interface LoginFormProps {
  cookies: Cookies;
  show: boolean;
  onShowChange: (state: boolean) => void
}

const LoginForm = (props: LoginFormProps): JSX.Element => {

  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { cookies } = props;

  const handleClose = () => props.onShowChange(false);
  const handleShow = () => props.onShowChange(true);

  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const data = await axios.post(routes.signIn(userName, passWord), {
        username: userName,
        password: passWord,
      });
      const user = data.data as UserModel;
      cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
      await dispatch(updateCurrentUser(user));
      handleClose();
    } catch (err) {
      console.log(err);
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
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="Default"
                        type="text"
                        placeholder="Enter user name"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={handleUserNameChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="Default"
                        defaultValue={passWord}
                        type="password"
                        placeholder="Type Password"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={handlePasswordChange}
                    />
                </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import routes from "../../routes";
import { updateCurrentUser } from "../../slices/user";
import styles from "./RegisterForm.module.scss"
import { Cookies, withCookies } from "react-cookie";
import { RootState } from "models/RootState";
import { Auth } from "../../AppConstants";
import { UserModel } from "models/User/User";
import { useHistory } from "react-router-dom";

interface RegisterFormProps {
    cookies: Cookies
}

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const history = useHistory();
    const { cookies } = props;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = await axios.post(routes.signUp(userName, passWord), {username: userName, password: passWord});
            const user = data.data as UserModel;
            cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
            await dispatch(updateCurrentUser(user));
            
            history.push(`/`);
        } catch (err) {
            console.error(err);
        }
    }

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassWord(event.target.value);
    }
    return (
        <div className={styles.main}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUserName">
                    <Form.Label>User name</Form.Label>
                    <Form.Control defaultValue={userName} type="text" placeholder="Enter user name" onChange={handleUserNameChange} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control defaultValue={passWord} type="password" placeholder="Type Password" onChange={handlePasswordChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

const mapStateToProps = (state: RootState , ownProps: {cookies: Cookies}) => {
    return ({
      state: state,
      cookies: ownProps.cookies
    });
}

  
export default withCookies(connect(mapStateToProps, null)(RegisterForm));
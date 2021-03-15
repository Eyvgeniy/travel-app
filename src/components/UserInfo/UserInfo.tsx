import { Auth } from "../../AppConstants";
import { RootState } from "models/RootState";
import * as React from "react";
import { Cookies, withCookies } from "react-cookie";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "../../slices/user";
import { useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

interface UserInfoProps {
    cookies: Cookies
}


const UserInfo = ({cookies}: UserInfoProps): JSX.Element => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => ({
      user: state.user.currentUser
    }));
    const history = useHistory();

    const handleOnLogIn = () => {
        history.push(`/login`);
    }; 
    const handleOnRegister = () => {
        history.push(`/register`);
    };

    const handleOnLogOut = async () => {
        cookies.set(Auth.COOKIE_TOKEN, user.accessToken);
        await dispatch(logOut(null));
    };

    return (
        <>
            {user && 
                <div>
                    <img
                        src="../../../public/assets/images/user-icon.png"
                        alt="user-info"
                        style={{ width: "11%" }}
                    />
                    <span>{user.username}</span>
                    <button className="btn btn-outline-secondary mr-1" onClick={handleOnLogOut}>Log Out</button>
                </div>
            }
            {!user &&
                <>
                    <button className="btn btn-outline-secondary mr-1" onClick={handleOnLogIn}>Sign In </button>
                    <button className="btn btn-outline-secondary mr-1" onClick={handleOnRegister}>Sign Up</button>
                </>
            }
        </>
    )
}

const mapStateToProps = (state: RootState , ownProps: {cookies: Cookies}) => {
    return ({
      state: state,
      cookies: ownProps.cookies
    });
}

export default withCookies(connect(mapStateToProps, null)(UserInfo));
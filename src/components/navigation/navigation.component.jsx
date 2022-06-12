import { Button } from "react-bootstrap";
import "./navigation.styles.scss";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import logo from "../../assets/react.png";
import { useContext, useState, useEffect } from "react";
import {
  UserContext,
  setUser,
  setEmail,
  saveToken,
  updateLoginState,
  isLoggedIn,
} from "../../contexts/user.context";

const Navigation = () => {
  const { updateLoginState, isLoggedIn } = useContext(UserContext);

  let navigate = useNavigate();

  const logOut = () => {
    updateLoginState(false);
    console.log("false");
    navigate("/logon");
  };

  return (
    <Fragment>
      <div className="container-main">
        <div className="container-header">
          <div className="container-logo">
            <Link to="/">
              <span>
                <img className="logo" src={logo} alt="logo" />
              </span>
            </Link>
          </div>

          <div className="navigation-controller">
            <div className="navigation-dropdowns">
              <h4>Navigation</h4>
            </div>
          </div>

          <div className="user-specs">
            <div className="login-status">
              {isLoggedIn ? (
                <span>
                  <Button variant="link" onClick={logOut}>
                    Signout
                  </Button>
                </span>
              ) : (
                <span>
                  <Button variant="link">Login/SignUp</Button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

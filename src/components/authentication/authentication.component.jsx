import Navigation from "../navigation/navigation.component";
import { Button, Form, Alert, Modal } from "react-bootstrap";
import {
  UserContext,
  setUser,
  setEmail,
  saveToken,
  updateLoginState,
  isLoggedIn,
} from "../../contexts/user.context";
import {myName, myEmail} from "../../redux/features/user/userSlice";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import "./authentication.styles.scss";
import Alerts from "../error-pages/error-messages";
import UserWall from "../wall/wall.component";
import { useSelector, useDispatch } from "react-redux";
//import SignupModal from "./sign-up.component";

const UserLogon = () => {
  const { setUser, setEmail, saveToken, updateLoginState } =
    useContext(UserContext);

  const dispatch = useDispatch();
  

  const [emailAddr, setEmailAddr] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [signUpClicked, setSignUp] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();
  // useEffect(() => {
  //   console.log("token", token);
  // }, [token]);

  const saveEmail = (event) => {
    setEmailAddr(event.target.value);
    //console.log(emailAddr);
  };

  const savePassword = (event) => {
    setPassword(event.target.value);
    //console.log(password);
  };

  const verifyUserHandler = (event) => {
    event.preventDefault();
    const baseURL = `http://localhost:4000/verify_user?email=${emailAddr}&password=${password}`;

    axios
      .post(baseURL)
      .then((response) => {
        if (response.data[2] === "verified") {
          console.log("user verified");

          var email = response.data[0];
          var name = response.data[1];
          var tokenData = response.data[3];
          //console.log(tokenData);

          saveToken(tokenData);
          setEmail(email);
          setUser(name);
          updateLoginState(true);
          dispatch(myName(name));
          dispatch(myEmail(email));

          navigate("/wall");
        } else {
          setErrorStatus(response.data);
          //console.log("user auth error");
        }
      })
      .catch((e) => {
        setErrorStatus(e.message);
      });
  };

  return (
    <div className="auth-container">
      {errorStatus != "" ? (
        <Alerts message={errorStatus} />
      ) : (
        console.log("no error")
      )}

      <div className="auth-login">
        <div className="login-info">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={saveEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={savePassword}
              />
            </Form.Group>
            <Button
              className="submit"
              variant="primary"
              type="submit"
              onClick={verifyUserHandler}
            >
              Log In
            </Button>
            <div className="forgot-password">Forgotten password?</div>
            <hr className="divider"></hr>

            <Button
              className="new-account"
              variant="success"
              type="button"
              onClick={handleShow}
            >
              Create New Account
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserLogon;

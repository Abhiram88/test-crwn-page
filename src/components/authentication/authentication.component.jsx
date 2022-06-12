import Navigation from "../navigation/navigation.component";
import { Button, InputGroup, Form } from "react-bootstrap";
import {
  UserContext,
  setUser,
  setEmail,
  saveToken,
} from "../../contexts/user.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./authentication.styles.scss";

const UserLogon = () => {
  const { setUser, setEmail, saveToken } = useContext(UserContext);
  const [emailAddr, setEmailAddr] = useState("");
  const [password, setPassword] = useState("");

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

  const verifyUserHandler = async (event) => {
    event.preventDefault();
    const baseURL = `http://localhost:4000/verify_user?email=${emailAddr}&password=${password}`;

    await axios
      .post(baseURL)
      .then((response) => {
        //console.log("User verified");
        if (response.data[2] === "verified") {
          console.log("user verified");

          var email = response.data[0];
          var name = response.data[1];
          var tokenData = response.data[3];
          //console.log(tokenData);

          saveToken(tokenData);
          setEmail(email);
          setUser(name);
        } else {
          console.log("user auth error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="auth-container">
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
              type="submit"
              onClick={verifyUserHandler}
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

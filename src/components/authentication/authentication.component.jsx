import Navigation from "../navigation/navigation.component";
import { Button, InputGroup, Form } from "react-bootstrap";
import { UserContext, setUser, setEmail } from "../../contexts/user.context";
import { useContext, useState } from "react";
import axios from "axios";
import React from "react";
import "./authentication.styles.scss";

const UserLogon = () => {
  const { setUser, setEmail } = useContext(UserContext);
  const [emailAddr, setEmailAddr] = useState("");
  const [password, setPassword] = useState("");

  const saveEmail = (event) => {
    setEmailAddr(event.target.value);
  };

  const verifyPassword = (event) => {
    setPassword(event.target.value);
  };

  const verifyUserHandler = (event) => {
    event.preventDefault();
    const baseURL = `http://localhost:4000/verify_user?email=${emailAddr}&password=${password}`;

    axios
      .post(baseURL)
      .then((response) => {
        //console.log("User verified");
        if (response.data[2] === "verified") {
          console.log("user verified");
          setEmail(response.data[0]);
          setUser(response.data[1]);
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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={saveEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={verifyPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={verifyUserHandler}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserLogon;

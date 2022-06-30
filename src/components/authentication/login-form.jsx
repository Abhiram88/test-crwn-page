import { Fragment } from "react";
import { Button, Form, Alert, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {myName, myEmail, loginError} from "../../redux/features/user/userSlice";
import axios from "axios";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import {
    UserContext,
    setUser,
    setEmail,
    saveToken,
    updateLoginState,
    isLoggedIn,
  } from "../../contexts/user.context";

const LoginForm = () =>{
    const [emailAddr, setEmailAddr] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorStatus, setErrorStatus] = useState("");
    const [signUpClicked, setSignUp] = useState(false);
    const [show, setShow] = useState(false);

    const { setUser, setEmail, saveToken, updateLoginState } =
    useContext(UserContext);

    const dispatch = useDispatch();
  
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
              dispatch(loginError(response.data));
              //console.log("user auth error");
            }
          })
          .catch((e) => {
            dispatch(e.message);
          });
      };

      
    return (
        <Fragment>
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
              type="button"
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

        </Fragment>
    );
}

export default LoginForm;
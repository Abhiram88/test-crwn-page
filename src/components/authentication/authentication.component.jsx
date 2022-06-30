import Navigation from "../navigation/navigation.component";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./authentication.styles.scss";
import Alerts from "../error-pages/error-messages";
import UserWall from "../wall/wall.component";
import { useSelector, useDispatch } from "react-redux";
import {myName, myEmail, loginError} from "../../redux/features/user/userSlice";
import LoginForm from "./login-form";
//import SignupModal from "./sign-up.component";

const UserLogon = () => {

  const selector = useSelector((state) => state.user.errMessage);
  
  return (
    <div className="auth-container">
      {selector != "" && (
        <Alerts message={selector} />
      )}

      <div className="auth-login">
        <div className="login-info">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default UserLogon;

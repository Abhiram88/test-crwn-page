import React, { Fragment } from "react";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import profile_pic from "../../assets/profile-pic.jpg";
import "./user-profile.styles.scss";
import Navigation from "../navigation/navigation.component";
import { useSelector, useDispatch } from "react-redux";
import {myName, myEmail} from "../../redux/features/user/userSlice"

const UserProfile = () => {
  //const { currentUser, userEmail } = useContext(UserContext);
  
  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);
  //console.log(userName);
  //console.log(userEmail);
  return (
    <Fragment>
      <Navigation />

      <div className="user-info">
        <img src={profile_pic} alt="profile_pic" />
        <div className="user-details">
          <p className="name">{userName}</p>
          <p className="friends">{userEmail}</p>
        </div>
      </div>

      <div className="profile-container">
        <div className="left-pane">
          <div className="pane-content">
            <ul>
              <Link to="#">
                <li>Security</li>
              </Link>
              <Link to="#">
                <li>Security</li>
              </Link>
              <li>option 3</li>
              <li>option 4</li>
            </ul>
          </div>
        </div>
        <div className="right-pane">
          <p>Profile page</p>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;

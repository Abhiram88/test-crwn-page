import React from "react";
import {
  UserContext,
  currentUser,
  userEmail,
} from "../../contexts/user.context";
import { useContext } from "react";

const UserProfile = () => {
  const { currentUser, userEmail } = useContext(UserContext);
  console.log(useContext(UserContext));
  return (
    <div>
      <p>User: {currentUser}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
};

export default UserProfile;

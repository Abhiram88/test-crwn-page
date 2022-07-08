import React from "react";
import { useContext, useState, useEffect } from "react";
import {
  UserContext,
  setUser,
  setEmail,
  saveToken,
  updateLoginState,
  isLoggedIn,
} from "../../contexts/user.context";

const FriendsDropdown = () => {
    const { updateLoginState, isLoggedIn, userFriends } = useContext(UserContext);
    return (
        <div className="friends-dropdown">
                        {
                          userFriends.map((friends) => (
                            <p key={friends}>{friends}</p>
                          ))
                        }
                      </div>
    );
}

export default FriendsDropdown;
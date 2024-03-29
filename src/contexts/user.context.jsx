import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userEmail: null,
  setUserEmail: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [token, setToken] = useState("");
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [userFriends, setUserFriends] = useState([]);
  var myFriends = [];

  useEffect(() => {
    // console.log("User", currentUser);
    // console.log("Email", userEmail);
    // console.log("token", token);
  }, [currentUser, userEmail]);

  const setUser = (user) => {
    setCurrentUser(user);
    //    console.log({ currentUser, user });
  };

  const saveToken = (tokenData) => {
    setToken(tokenData);
  };

  const myFriendRequests = (friendReq) => {
    friendReq.map((friend) => {
      myFriends.push(friend)
    });
    setUserFriends(myFriends)
    console.log(userFriends);
  }

  const setEmail = (email) => {
    setUserEmail(email);
  };

  const updateLoginState = (status) => {
    setLoginStatus(status);
  };

  const value = {
    setUser,
    setEmail,
    currentUser,
    userEmail,
    token,
    saveToken,
    isLoggedIn,
    updateLoginState,
    myFriendRequests,
    userFriends,
    setUserFriends
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

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

  const setUser = (user) => {
    console.log("user contxt");
    console.log("before", currentUser);
    setCurrentUser(user);
    console.log("after", currentUser);
  };

  const setEmail = (email) => {
    console.log("user contxt");
    console.log("before", userEmail);
    setUserEmail(email);
    console.log("after", userEmail);
  };

  // useEffect(() => {
  //   setUser();
  //   setEmail();
  // }, []);

  const value = { setUser, setEmail, currentUser, userEmail };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

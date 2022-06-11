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

  useEffect(() => {
    console.log("User", currentUser);
    console.log("Email", userEmail);
  }, [currentUser, userEmail]);

  const setUser = (user) => {
    setCurrentUser(user);
    //    console.log({ currentUser, user });
  };

  const setEmail = (email) => {
    setUserEmail(email);
  };

  const value = { setUser, setEmail, currentUser, userEmail };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

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
    setCurrentUser(user);
    console.log(currentUser);
  };

  const setEmail = (email) => {
    setUserEmail(email);
    console.log(userEmail);
  };

  const value = { setUser, setEmail, currentUser, userEmail };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

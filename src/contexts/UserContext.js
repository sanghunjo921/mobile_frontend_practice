import React, { createContext } from "react";
import { useProfile } from "../hooks/useProfile";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useProfile();

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

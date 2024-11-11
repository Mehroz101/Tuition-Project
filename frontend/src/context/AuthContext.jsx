import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userProvider, setUserProvider] = useState(null);
  const login = () => {
    // login logic here
    setUserProvider("student");
    localStorage.setItem("role","student")
  };
  const logout = () => {
    setUserProvider(null);
  };
  const value = { userProvider, setUserProvider, login, logout };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

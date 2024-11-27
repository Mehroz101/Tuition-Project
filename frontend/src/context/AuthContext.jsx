import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userProvider, setUserProvider] = useState(null);
  const login = (role, token) => {
    // login logic here
    localStorage.setItem("role", role);
    localStorage.setItem("usertoken", token);
  };
  const logout = () => {
    setUserProvider(null);
    localStorage.removeItem("role");
    localStorage.removeItem("usertoken");
  };
  const checkuser = (role) => {
    const loginuserrole = localStorage.getItem("role");
    if (loginuserrole === role) {
      return loginuserrole;
    } else {
      return;
    }
  };
  const value = { userProvider, setUserProvider, login, logout, checkuser };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

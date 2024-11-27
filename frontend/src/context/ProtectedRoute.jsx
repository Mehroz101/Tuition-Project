import React from "react";
import { useAuth } from "./AuthContext";
import Login from "../pages/Login";

const ProtectedRoute = ({ element, authrizedRole }) => {
  const { checkuser } = useAuth();
  const authRole = checkuser(authrizedRole);
  console.log(authrizedRole);
  if (!authRole || !authrizedRole === authRole) {
    return <Login />;
  } else {
    return element;
  }
};

export default ProtectedRoute;

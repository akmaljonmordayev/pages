import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (!token) {
    return <Navigate replace to={"/"} />;
  }
  return children;
}

export default ProtectedRoute;

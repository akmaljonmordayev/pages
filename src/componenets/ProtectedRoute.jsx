import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("bilol");

  if (!token) {
    return <Navigate replace to={"/"} />;
  }

  return children;
}

export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate , Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = useSelector((state) => state.authenticated);

  return auth ? (
    <Outlet /> 
  ) : (
    <Navigate  to="/sign-in" />
  );
};

export default ProtectedRoute;
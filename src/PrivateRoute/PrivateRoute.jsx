import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Component/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  } else return <Navigate to="/auth/signin" />;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Component/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  } else return <Navigate state={location.pathname} to="/auth/signin" />;
};

export default PrivateRoute;

import React from "react";
//import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

//this function wrap all componenets and routs it if login success else redirect to login
function PrivateRoute() {
  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { user } = userLogin;
  //return user && user.isAdmin ? <Outlet /> : <Navigate to="/login" />;

  const x = true;
  return x ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

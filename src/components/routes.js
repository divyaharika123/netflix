import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("loggedin");
    return auth ? <Outlet /> : <Navigate to={"/navbar"} />
}

export default ProtectedRoutes;
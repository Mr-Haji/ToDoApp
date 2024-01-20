import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouteList from "./RouteList";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import LogIn from "../Screens/LogIn/LogIn";
import SignUp from "../Screens/SingUp/SignUp";
import { Home } from "@mui/icons-material";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<LogIn />} path="/" />
          <Route element={<SignUp />} path="/singIn" />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/todo" />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

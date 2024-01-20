import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouteList from "./RouteList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {RouteList.map((e, i) => {
          return <Route key={i} path={e.path} element={e.element} />;
        })}
      </Routes>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Login from "../pages/Login/Login";
import WorkOut from "../pages/Program/WorkOut";
import Shop from "../pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/workout" element={<WorkOut />}></Route>
      <Route path="/stor" element={<Shop />}>
        Store
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
    </Routes>
  );
};

export default AllRoutes;

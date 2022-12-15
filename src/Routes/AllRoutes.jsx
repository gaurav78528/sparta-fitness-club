import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Login from "../pages/Login/Login";
import SinglePage from "../pages/Program/SinglePage";
import WorkOut from "../pages/Program/WorkOut";
import Shop from "../pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";

import Workout from "../pages/Workouts/Workout";

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
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" ></Route>
      <Route path="/stor" element={<Shop/>}>Store</Route>
      <Route path="/single" element={<SinglePage/>}>Store</Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
  );
};

export default AllRoutes;

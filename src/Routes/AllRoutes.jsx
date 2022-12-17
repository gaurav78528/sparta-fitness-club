import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
// import Plans from "../pages/Program/WorkOut";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Login from "../pages/Login/Login";
import SinglePage from "../pages/Program/SinglePage";
import Plans from "../pages/Program/Plans";
import Shop from "../pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";
import Workout from "../pages/Workouts/Workout";
import Careers from "../pages/about/Careers";

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/workout" element={<WorkOut />}></Route> */}
      <Route path="/about" element={<About/>}></Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/plans" element={<Plans />}></Route>
      <Route path="/store" element={<Shop />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/workout" element={<Workout />}></Route>
      <Route path="/single" element={<SinglePage />}></Route>
      <Route path="/careers" element={<Careers />}></Route>
    </Routes>
  );
};

export default AllRoutes;

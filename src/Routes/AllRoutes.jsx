import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import WorkOut from "../pages/Program/WorkOut";

import Workout from "../pages/Workouts/Workout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" ></Route>
 
    
 
    
    </Routes>
  );
};

export default AllRoutes;

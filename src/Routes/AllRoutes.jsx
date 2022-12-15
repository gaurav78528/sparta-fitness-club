import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import WorkOut from "../pages/Program/WorkOut";
import Shop from "../pages/Shop/Shop";

import Workout from "../pages/Workouts/Workout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" ></Route>
 
      <Route path="/shop" element={<Shop/>}></Route>
 
    
    </Routes>
  );
};

export default AllRoutes;

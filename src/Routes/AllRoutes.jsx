import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WorkOut from "../pages/Program/WorkOut";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" element={<WorkOut />}></Route>
 
      {/* <Route path="/workout" element={<WorkOut />}></Route> */}
 
    
    </Routes>
  );
};

export default AllRoutes;

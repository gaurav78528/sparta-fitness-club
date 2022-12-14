import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/Home";
import WorkOut from "../pages/Program/WorkOut";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" element={<WorkOut />}></Route>
 
      {/* <Route path="/workout" element={<WorkOut />}></Route> */}
      <Route path="/about" element={<About/>}></Route>
 
    
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/Program/SinglePage";
import WorkOut from "../pages/Program/WorkOut";
import Shop from "../pages/Shop/Shop";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
      <Route path="/workout" element={<WorkOut />}></Route>
 
      <Route path="/stor" element={<Shop/>}>Store</Route>
      <Route path="/single" element={<SinglePage/>}>Store</Route>
 
    
    </Routes>
  );
};

export default AllRoutes;

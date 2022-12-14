import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WorkOut from "../pages/Program/WorkOut";
 

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
<<<<<<<<< Temporary merge branch 1
      <Route path="/workout" element={<WorkOut />}></Route>
=========
      {/* <Route path="/workout" element={<WorkOut />}></Route> */}
>>>>>>>>> Temporary merge branch 2
    
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../components/Admin/AdminHome";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<AdminHome />}>Admin</Route>
      
    </Routes>
  );
};

export default AllRoutes;

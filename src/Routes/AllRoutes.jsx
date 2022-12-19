import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/Home/Home";
import Join from "../pages/Join/Join";
import Login from "../pages/Login/Login";
import SinglePage from "../pages/Program/SinglePage";
import Plans from "../pages/Program/Plans";
import Shop from "../pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";
import Workout from "../pages/Workouts/Workout";
import Careers from "../pages/about/Careers";
import MealPlans from "../pages/Program/MealPlans";
import MealSingle from "../pages/Program/MealSingle";
import Pilot from "../pages/Program/Pilot";
import PilotSingle from "../pages/Program/PilotSingle";
import Routines from "../pages/Program/Routines";
import Cart from "../pages/Cart/Cart";
import HealthLiving from "../pages/HealthyLiving/HealthLiving";
import WorkoutVideos from "../pages/Workouts/WorkoutVideos";
import CustomWorkout from "../pages/Workouts/CustomWorkout/CustomWorkout";
import WorkoutSingle from "../pages/Workouts/WorkoutSingle";
import WorkSingleVideo from "../pages/Workouts/WorkSingleVideo";
import MemberShip from "../pages/membership/Membership";
import AboutY from "../pages/AboutY/AboutY";
import Checkout from "../pages/checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/plans" element={<Plans />}></Route>
      <Route path="/store" element={<Shop />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/workout-videos" element={<WorkoutVideos />}></Route>
      <Route path="/workout" element={<Workout />}></Route>
      <Route path="/pilot" element={<Pilot />}></Route>
      <Route path="/Pilot/:id" element={<PilotSingle />}></Route>
      <Route path="/routine" element={<Routines />}></Route>
      <Route path="/Products/:id" element={<SinglePage />}></Route>
      <Route path="/workoutsingle/:id" element={<WorkoutSingle />}></Route>
      <Route path="/worksinglevideo/:id" element={<WorkSingleVideo />}></Route>
      <Route path="/meal-plan" element={<MealPlans />}></Route>
      <Route path="/Meal/:id" element={<MealSingle />}></Route>
      <Route path="/single" element={<SinglePage />}></Route>
      <Route path="/careers" element={<Careers />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/healthy-living" element={<HealthLiving />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/abouty" element={<AboutY />}></Route>
      <Route path="/custom-workouts" element={<CustomWorkout />}></Route>
>
      <Route path="/membership" element={<MemberShip />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/checkout/payment" element={<Payment />}></Route>
      <Route path="/success" element={<OrderSuccess />}></Route>
    </Routes>
  );
};

export default AllRoutes;

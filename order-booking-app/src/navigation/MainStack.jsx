import React from "react";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import FlatSale from "../pages/FlatSale";
import DailyDeals from "../pages/DailyDeals";
import AdminDashboard from "../components/AdminDashboard";
import AdminLogin from "../components/AdminLogin";
import Signup from "../components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
;

function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/offers" element={<Offers />} />
      <Route path="/flatsale" element={<FlatSale />} />
      <Route path="/DailyDeals" element={<DailyDeals />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
  );
}



export default MainStack;

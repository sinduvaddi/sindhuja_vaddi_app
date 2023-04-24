import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";
import MyProfile from "./components/MyProfile";

export default function App() {
  return (
    <>
      <Dashboard />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/MyProfile" exact element={<MyProfile />} />
        <Route path="/EditProfile" exact element={<EditProfile />} />
      </Routes>
    </>
  );
}

// queries
// 1. Line no 11, diff between element and component
// 2.

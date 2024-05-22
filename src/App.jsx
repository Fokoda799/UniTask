import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Calendar from "./pages/Dashboard/Calendar";
import Notes from "./pages/Dashboard/Notes";
import Tasks from "./pages/Dashboard/Tasks";
import Projects from "./pages/Dashboard/Projects";
import Teams from "./pages/Dashboard/Teams";
import Trash from "./pages/Dashboard/Trash";
import Sidebar from "./components/dashboard/Sidebar";
import HeaderDashboard from "./components/dashboard/HeaderDashboard";
import Profile from "./pages/Dashboard/Profile";
import Header from "./components/Home/Header";
import DashboardHome from "./pages/Dashboard/DashboardHome";

const loggedIn = false;
function App() {
  return (
    <div className="flex flex-col h-screen App">
      {loggedIn ? (
        <>
          <HeaderDashboard />
          <Sidebar />
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/calendar" element={<Calendar />} />
              <Route path="/dashboard/notes" element={<Notes />} />
              <Route path="/dashboard/tasks" element={<Tasks />} />
              <Route path="/dashboard/projects" element={<Projects />} />
              <Route path="/dashboard/teams" element={<Teams />} />
              <Route path="/dashboard/trash" element={<Trash />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

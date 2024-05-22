import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import DashboardHome from "./pages/Dashboard/DashboardHome";
// import Calendar from "./pages/Dashboard/Calendar";
// import Notes from "./pages/Dashboard/Notes";
// import Tasks from "./pages/Dashboard/Tasks";
// import Projects from "./pages/Dashboard/Projects";
// import Teams from "./pages/Dashboard/Teams";
// import Trash from "./pages/Dashboard/Trash";
// import SettingsProfile from "./pages/Dashboard/SettingsProfile";
import Header from "./components/Header";
import Login from "./pages/Login";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <div className="m-auto container">
        <Routes>
          {/* <Route path="/dashboard">
              <Sidebar />
              <div className="flex-grow p-4">
                <Switch>
                  <Route path="/dashboard" exact component={DashboardHome} />
                  <Route path="/dashboard/calendar" component={Calendar} />
                  <Route path="/dashboard/notes" component={Notes} />
                  <Route path="/dashboard/tasks" component={Tasks} />
                  <Route path="/dashboard/projects" component={Projects} />
                  <Route path="/dashboard/teams" component={Teams} />
                  <Route path="/dashboard/trash" component={Trash} />
                  <Route
                    path="/dashboard/settings"
                    component={SettingsProfile}
                  />
                </Switch>
              </div>
            </Route> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="/register" component={Register} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login";
import Calendar from "./pages/Dashboard/Calendar";
import Notes from "./pages/Dashboard/Notes";
import Tasks from "./pages/Dashboard/Tasks";
import Projects from "./pages/Dashboard/Projects";
import Teams from "./pages/Dashboard/Teams";
import Trash from "./pages/Dashboard/Trash";
import Profile from "./pages/Dashboard/Profile";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";

const loggedIn = false;
function App() {
  return (
    <div className="font-rubik flex flex-col min-h-[80dvh]">
      {loggedIn ? (
        <>
          <div className="dashboardRoot">
            <Routes>
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="notes" element={<Notes />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="projects" element={<Projects />} />
                <Route path="teams" element={<Teams />} />
                <Route path="trash" element={<Trash />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<h1>Oops! page not found 404</h1>} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Oops! page not found 404</h1>} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;

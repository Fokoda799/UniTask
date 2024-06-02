import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notes from "./pages/Dashboard/Notes";
import Projects from "./pages/Dashboard/Projects";
import Teams from "./pages/Dashboard/Teams";
import Trash from "./pages/Dashboard/Trash";
import Profile from "./pages/Dashboard/Profile";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import BoardPage from "./pages/Dashboard/BoardPage";
import TaskPage from "./pages/Dashboard/Tasks";
import CalendarPage from "./pages/Dashboard/CalendarPage";

const loggedIn = true;
function App() {
  return (
    <div className="font-rubik flex flex-col min-h-[80dvh]">
      {loggedIn ? (
        <>
          <div className="dashboardRoot">
            <Routes>
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="notes" element={<Notes />} />
                <Route path="tasks" element={<BoardPage />} />
                <Route path="TaskPage" element={<TaskPage />} />
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

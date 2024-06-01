import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row sm:flex-row">
      <Sidebar />
      <div className="root-container">
        <DashboardHeader />
        <div className="mt-[85px] md:mt-[85px]  lg:mt-[85px] xl:mt-[98px] sm:px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

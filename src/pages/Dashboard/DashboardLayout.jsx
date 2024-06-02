import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import { useState, useEffect } from "react";
import useSystemTheme from "../../components/dashboard/UserSysthemTheme";

const DashboardLayout = () => {
  const systemTheme = useSystemTheme();
  const [isDark, setIsDark] = useState(() => systemTheme === "dark");
  const [DomIsLoad, setDomIsLoad] = useState(false);

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "light";
  }, [isDark]);

  useEffect(() => {
    setIsDark(systemTheme === "dark");
  }, [systemTheme]);

  useEffect(() => {
    const handleDomContentLoaded = () => {
      setTimeout(() => {
        setDomIsLoad(true);
      }, 0);
    };

    document.addEventListener("DOMContentLoaded", handleDomContentLoaded);
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDomContentLoaded);
    };
  }, []);

  const toggleDarkMode = (state) => {
    setIsDark(state);
  };

  return (
    <div className="flex flex-row sm:flex-row">
      <Sidebar Mode={isDark} />
      <div
        className={`root-container ${
          isDark ? "darkModeSecond" : "bg-stone-100 "
        }`}
      >
        <DashboardHeader toggleDarkMode={toggleDarkMode} isDark={isDark} />
        <div
          className={`${
            DomIsLoad
              ? "opacity-0 blur-sm transition-all duration-700"
              : "opacity-1"
          } sm:ml-48 lg:ml-56 xl:ml-72 mt-[70px] sm:mt-[91px] p-2`}
        >
          <Outlet context={isDark} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

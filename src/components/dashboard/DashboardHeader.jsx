import MobileSidebar from "./MobileSidebar";
import { useEffect } from "react";
import useSystemTheme from "./UserSysthemTheme";

const DashboardHeader = ({ toggleDarkMode, isDark }) => {
  const systemTheme = useSystemTheme();

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "light";
  }, [isDark]);

  const handleClick = () => {
    toggleDarkMode(!isDark);
  };

  return (
    <div
      className={`fixed z-[9] top-0 right-0 w-full sm:border-none sm:w-[calc(100%-192px)] lg:w-[calc(100%-224px)] xl:w-[calc(100%-288px)] px-3 lg:px-8 py-2 sm:py-4 shadow-b-sm ${isDark ? "bg-zinc-800/40 shadow-xl sm:shadow-none sm:bg-zinc-800" : "bg-white/40 shadow-xl sm:shadow-none sm:border-none sm:bg-white"} flex flex-row justify-between items-center`}
      style={{ backdropFilter: "blur(14px)" }}
    >
      <input
        placeholder={`Type to search ${systemTheme}...`}
        className={`rounded-[6px] sm:border-none ${isDark ? "border-zinc-700 border navComponentDark text-slate-200" : "navComponentLight text-slate-700"} outline-none w-3/5 indent-2 border-full p-2 text-sm`}
      />
      <div className="flex flex-row items-center gap-2">
        <div
          onClick={handleClick}
          className={`flex flex-row sm:border-none ${isDark ? "border-zinc-700 border justify-end navComponentDark" : "justify-start navComponentLight"} items-center p-1 h-8 w-12 sm:h-8 sm:w-12 rounded-full cursor-pointer`}
        >
          <span
            className={`${isDark ? "darkMode" : "bg-white"} rounded-full h-5 w-5 sm:h-6 sm:w-6`}
          ></span>
        </div>
        <MobileSidebar isDark={isDark} />
      </div>
    </div>
  );
};

export default DashboardHeader;

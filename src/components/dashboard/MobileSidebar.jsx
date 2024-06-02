import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarContent from "./SidebarContent";

const MobileSidebar = ({ isDark }) => {
  return (
    <div className="flex sm:hidden z-[99999]   opacity-[0.6]">
      <Sheet>
        <SheetTrigger>
          <img
            src="/menu.svg"
            className={`w-8 h-8 ${isDark ? "navComponentDark border border-zinc-800" : "navComponentLight"}  rounded-[5px]`}
          />
        </SheetTrigger>
        <SheetContent className={`${isDark ? "darkModeSecond" : "bg-white"}`}>
          <div className="h-full flex flex-col justify-between">
            <SidebarContent Mode={isDark} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;

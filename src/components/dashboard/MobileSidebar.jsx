import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarContent from "./SidebarContent";

const MobileSidebar = () => {
  return (
    <div className="flex sm:hidden opacity-[0.6]">
      <Sheet>
        <SheetTrigger>
          <img src="/menu.svg" className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent>
          <div className="h-full flex flex-col justify-between">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;

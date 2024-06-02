import SidebarContent from "./SidebarContent";
const Sidebar = ({ Mode }) => {
  return (
    <aside
      className={`sidebar max-h-screen overflow-y-auto z-10 ${
        Mode ? "darkMode" : "bg-white"
      }`}
    >
      <SidebarContent Mode={Mode} />
    </aside>
  );
};

export default Sidebar;

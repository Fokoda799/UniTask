import { navLinks } from "../../utils/constants";
import { NavLink } from "react-router-dom";

const SidebarContent = () => {
  return (
    <>
      <ul className="space-y-4 ">
        <div className="mb-8 mx-auto">
          <img src="/Logo.svg" className="w-2/3 " />
        </div>
        {navLinks.slice(0, 5).map((itemData, index) => (
          <li
            key={index}
            className="bg-purple-900/70 rounded-l-full p-3 text-md font-medium"
          >
            <NavLink
              to={itemData.path}
              className={({ isActive }) =>
                isActive ? "text-purple-200  underline" : "text-white text-md"
              }
            >
              {itemData.icon}
              <div>{itemData.text}</div>
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        {navLinks.slice(5).map((itemData, index) => (
          <li
            key={index}
            className="bg-purple-900/70 rounded-l-full p-3 text-md font-medium"
          >
            <NavLink
              to={itemData.path}
              className={({ isActive }) =>
                isActive ? "text-purple-200  underline" : "text-white text-md"
              }
            >
              {itemData.icon}
              <div>{itemData.text}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarContent;

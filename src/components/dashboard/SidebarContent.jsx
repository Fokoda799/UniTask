import { navLinks } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SidebarContent = ({ Mode }) => {
  return (
    <>
      <ul className="space-y-4 ">
        <div className="mx-auto mb-8">
          <Link to={navLinks[0].path}>
            <img src="/Logo.svg" className="w-36" />
          </Link>
        </div>
        {navLinks.slice(0, 5).map((itemData, index) => (
          <li key={index}>
            <NavLink to={itemData.path}>
              {({ isActive }) => (
                <div
                  className={`flex  rounded-l-full p-3 ${Mode ? "text-purple-100" : "text-black"} space-x-6 items-center ${
                    isActive
                      ? `${Mode ? "appColorDark " : "appColor"} text-white font-semibold`
                      : "font-sm"
                  }`}
                >
                  <img
                    src={itemData.icon}
                    className="p-1 text-white bg-white rounded-full fill-current"
                  />
                  <div>{itemData.text}</div>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        {navLinks.slice(5).map((itemData, index) => (
          <li key={index}>
            <NavLink to={itemData.path}>
              {({ isActive }) => (
                <div
                  className={`flex ${Mode ? "text-purple-100" : "text-black"}
                  rounded-l-full p-3  space-x-6 items-center ${
                    isActive
                      ? `${Mode ? "appColorDark" : "appColor"} text-white font-semibold`
                      : "font-sm"
                  }`}
                >
                  <img
                    src={itemData.icon}
                    className="p-1 text-white bg-white rounded-full fill-current"
                  />
                  <div>{itemData.text}</div>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarContent;

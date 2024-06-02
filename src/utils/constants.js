import dbIcon from "../assets/images/sidebarimg/NIconDB.svg";
import calIcon from "../assets/images/sidebarimg/NIconCL.svg";
import notIcon from "../assets/images/sidebarimg/NIconNote.svg";
import taskIcon from "../assets/images/sidebarimg/NIconTask.svg";
import projIcon from "../assets/images/sidebarimg/NIconPro.svg";
import teamIcon from "../assets/images/sidebarimg/Nteamsicon.svg";
import trashIcon from "../assets/images/sidebarimg/NIconTrash.svg";
import comp from "../assets/images/dashboardimg/completed.svg";
import pend from "../assets/images/dashboardimg/pending.svg";
import totalT from "../assets/images/dashboardimg/totaltask.svg";
import inP from "../assets/images/dashboardimg/inprogress.svg";

export const statImgs = [
  {
    img: totalT,
    num: 120,
    text: "Total task",
  },
  {
    img: inP,
    num: 70,
    text: "InProgress",
  },
  {
    img: pend,
    num: 10,
    text: "Pending",
  },
  {
    img: comp,
    num: 40,
    text: "Completed",
  },
];
export const navLinks = [
  { path: "/", text: "Dashboard", icon: dbIcon },
  {
    path: "/calendar",
    text: "Calendar",
    icon: calIcon,
  },
  {
    path: "/notes",
    text: "Notes",
    icon: notIcon,
  },
  {
    path: "/tasks",
    text: "Tasks",
    icon: taskIcon,
  },
  {
    path: "/projects",
    text: "Projects",
    icon: projIcon,
  },
  {
    path: "/teams",
    text: "Teams",
    icon: teamIcon,
  },
  {
    path: "/trash",
    text: "Trash",
    icon: trashIcon,
  },
];

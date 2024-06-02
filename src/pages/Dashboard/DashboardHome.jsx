import { Link, useOutlet } from "react-router-dom";
import Calendar from "../../components/dashboard/Calendar";
import { useState } from "react";
import learnMore from "../../assets/images/dashboardimg/learnmore.svg";
import UserStats from "../../components/dashboard/UserStats";
import { statImgs } from "../../utils/constants";
import GaugeChart from "../../components/dashboard/GaugeChart";
import ApexChart from "../../components/dashboard/LineChart";
import { useOutletContext } from "react-router-dom";

const getStyles = (stat) => {
  return stat === "Total task"
    ? "bg-gradient-to-r from-purple-800/70 to-purple-200"
    : stat == "InProgress"
    ? "bg-gradient-to-tr from-blue-700/70 to-violet-300"
    : stat == "Pending"
    ? "bg-gradient-to-tr from-orange-500 to-red-300/50"
    : "bg-gradient-to-r from-green-600/80 to-green-300";
};

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  const userOnDarkMode = useOutletContext();
  const textColor = userOnDarkMode ? "text-slate-300" : "text-slate-400";
  return (
    <>
      <section className="flex flex-row flex-wrap gap-6 px-4 pb-8 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center w-full gap-6 lg:flex-row lg:gap-8">
          <div
            className={` sm:flex-grow sm:gap-2 lg:mt-1 sm:h-[280px] ${
              userOnDarkMode ? "darkMode" : "bg-white"
            }  rounded-xl w-full py-4 px-3 flex flex-col sm:flex-row justify-between items-center`}
          >
            <div className="flex flex-col justify-center w-full leading-10">
              <p className={`font-light text-md ${textColor}`}>Welcome To</p>
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500/70 to-blue-300 ">
                Your Task Management Area
              </p>
              <p className={`font-light text-sm ${textColor}`}>
                some text or description goes here... Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s.
              </p>
              <Link to="#">
                <button
                  className={`text-[.8rem] capitalize mt-2  px-2  rounded-full ${
                    userOnDarkMode
                      ? "text-slate-200 appColorDark "
                      : "appColor text-white"
                  } `}
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="-mt-4  sm:mt-0">
              <img src={learnMore} className="w-56 sm:w-72" />
            </div>
          </div>
          <div
            className={`w-full px-4 ${
              userOnDarkMode ? "darkMode" : "bg-white"
            }  rounded-xl lg:w-1/3`}
          >
            <Calendar
              className="w-full mx-auto sm:mx-0 "
              userOnDarkMode={userOnDarkMode}
            />
          </div>
        </div>

        <div className="grid w-full gap-6 gird-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {statImgs.map((stat) => (
            <UserStats
              key={stat.text}
              img={stat.img}
              number={stat.num}
              text={stat.text}
              bgStyles={getStyles(stat.text)}
              darkMode={userOnDarkMode}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-6 lg:flex-row lg:items-center">
          {/* <div className="flex flex-col items-center w-full space-y-6 sm:space-x-3 sm:h-full sm:w-full lg:flex-row sm:justify-between sm:items-center"> */}
          <div
            className={`${
              userOnDarkMode ? "darkMode" : "bg-white"
            } w-full lg:w-2/3 -pl-2 pr-2 py-2 sm:p-3 rounded-xl`}
          >
            <ApexChart />
          </div>
          <div
            className={`w-full ${
              userOnDarkMode ? "darkMode" : "bg-white"
            } mx-auto  sm:w-[370px] lg:h-[389px] flex justify-center items-center  lg:mx-0 lg:w-1/3 rounded-xl`}
          >
            <GaugeChart />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardHome;

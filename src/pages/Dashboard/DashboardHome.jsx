import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <section className="grid grid-cols-* gap-4">
      <div className="w-full bg-white rounded-xl lg:w-2/3 flex flex-col sm:items-center sm:flex-row ">
        <div className="border-2 space-y-2 border-black border-dotted">
          <p className="font-light text-md text-slate-400">Welcome To</p>
          <p className="font-semibold text-black text-lg">
            Your Task Management Area
          </p>
          <p className="font-light text-sm text-slate-400">
            some text or description goes here...
          </p>
          <Link to="#">
            <button className="text-[.8rem] capitalize appColor text-white py-1 px-2  rounded-full">
              Learn More
            </button>
          </Link>
        </div>
        <img src="/menu.svg" className="w-44" />
      </div>
      <div className="">
        <div className="bg-green-300"> hello world</div>
      </div>
    </section>
  );
};

export default DashboardHome;

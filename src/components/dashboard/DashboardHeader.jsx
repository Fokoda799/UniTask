import MobileSidebar from "./MobileSidebar";
const DashboardHeader = () => {
  return (
    <div className="fixed w-full bg-white px-6 py-2  sm:py-4  shadow-sm flex  justify-between itmes-center">
      <input
        placeholder="Type to search..."
        className="bg-slate-100 outline-none indent-2 border-full p-2 text-sm text-slate-500 sm:w-full rounded-xl"
      />
      <MobileSidebar />
    </div>
  );
};

export default DashboardHeader;

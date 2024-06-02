const UserStats = ({ img, text, number, bgStyles, darkMode }) => {
  return (
    <div
      className={`w-full ${darkMode ? "border-zinc-800 border-2" : ""} sm:flex-grow hover:scale-95  ${bgStyles} py-8 sm:py-6 rounded-xl space-x-8 flex  justify-center items-center`}
    >
      <span className="p-1 bg-white rounded-full">
        <img src={img} className="w-12 sm:w-8" />
      </span>
      <div className="space-y-1">
        <span className="text-white font-semibold text-xl">{number}</span>
        <p className="xl:text-2xl sm:text-lg text-md text-white font-light">
          {text}
        </p>
      </div>
    </div>
  );
};

export default UserStats;

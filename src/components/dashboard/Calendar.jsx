import { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function InlineDemo({ userOnDarkMode }) {
  const [date, setDate] = useState(null);

  return (
    <div
      className={`card ${userOnDarkMode ? "darkMode" : "bg-white"} flex justify-content-center`}
    >
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
        className={`w-full leading-8 ${userOnDarkMode ? "text-slate-300" : ""} h-[280px] flex justify-center items-center`}
      />
    </div>
  );
}

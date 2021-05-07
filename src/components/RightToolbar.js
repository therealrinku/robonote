import { AiOutlineCalendar, CgChevronRight } from "react-icons/all";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const RightToolbar = ({ setDatePlus, currentDate, setCurrentDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleAndSetDate = (e) => {
    setShowCalendar(false);
    setCurrentDate(e);
  };

  return (
    <div className="toolbars">
      <div className="toolbar right">
        <button onClick={() => setDatePlus((prev) => prev + 1)}>
          <CgChevronRight />
        </button>

        <button onClick={() => setShowCalendar((prev) => !prev)}>
          <AiOutlineCalendar />
        </button>
      </div>

      {showCalendar ? (
        <div className="calendar">
          <Calendar value={currentDate} onChange={toggleAndSetDate} />
        </div>
      ) : null}
    </div>
  );
};

export default RightToolbar;

import { VscHome, CgChevronLeft, AiOutlineCalendar } from "react-icons/all";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const LeftToolbar = ({ setDatePlus, currentDate, setCurrentDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const resetDate = () => {
    setCurrentDate(new Date());
    setDatePlus(0);
  };

  const toggleAndSetDate = (e) => {
    setShowCalendar(false);
    setCurrentDate(e);
  };

  return (
    <div className="toolbars">
      <div className="toolbar left">
        <button onClick={() => setDatePlus((prev) => prev - 1)}>
          <CgChevronLeft />
        </button>

        <button onClick={resetDate}>
          <VscHome />
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

export default LeftToolbar;

import { VscHome, CgChevronLeft, AiOutlineCalendar } from "react-icons/all";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
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

  //to hide calendar on outside click
  useEffect(() => {
    window.onclick = (event) => {
      const exclude_classname = [
        "react-calendar__navigation",
        "react-calendar__navigation__label",
        "calendar-open-button",
        "react-calendar__tile react-calendar__year-view__months__month",
        "react-calendar",
      ];
      if (!exclude_classname.includes(event.target.parentNode.className)) {
        setShowCalendar(false);
      }
    };
  }, []);

  return (
    <div className="toolbars">
      <div className="toolbar left">
        <button onClick={() => setDatePlus((prev) => prev - 1)}>
          <CgChevronLeft />
        </button>

        <button onClick={resetDate}>
          <VscHome />
        </button>

        <button onClick={() => setShowCalendar((prev) => !prev)} className="calendar-open-button">
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

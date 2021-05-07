import { AiOutlineCalendar, CgChevronRight } from "react-icons/all";
import Calendar from "react-calendar";
import { Fragment, useState } from "react";
import "react-calendar/dist/Calendar.css";

const RightToolbar = ({ setDatePlus }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Fragment>
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
          <Calendar />
        </div>
      ) : null}
    </Fragment>
  );
};

export default RightToolbar;

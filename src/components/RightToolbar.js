import { AiOutlineCalendar, CgChevronRight } from "react-icons/all";

const RightToolbar = ({ setDatePlus }) => {
  return (
    <div className="toolbar right">
      <button onClick={() => setDatePlus((prev) => prev + 1)}>
        <CgChevronRight />
      </button>

      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <AiOutlineCalendar />
      </button>
    </div>
  );
};

export default RightToolbar;

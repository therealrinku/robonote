import { VscHome, CgChevronLeft } from "react-icons/all";

const LeftToolbar = ({ setDatePlus, setCurrentDate }) => {
  return (
    <div className="toolbar left">
      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <CgChevronLeft />
      </button>

      <button onClick={() => setCurrentDate(new Date())}>
        <VscHome />
      </button>
    </div>
  );
};

export default LeftToolbar;

import { VscHome, CgChevronLeft } from "react-icons/all";

const LeftToolbar = ({ setDatePlus }) => {
  return (
    <div className="toolbar--left">
      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <CgChevronLeft />
      </button>

      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <VscHome />
      </button>
    </div>
  );
};

export default LeftToolbar;

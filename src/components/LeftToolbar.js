import { VscHome, CgChevronLeft } from "react-icons/all";

const LeftToolbar = ({ setDatePlus, setCurrentDate }) => {
  const resetDate = () => {
    setCurrentDate(new Date());
    setDatePlus(0);
  };

  return (
    <div className="toolbar left">
      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <CgChevronLeft />
      </button>

      <button onClick={resetDate}>
        <VscHome />
      </button>
    </div>
  );
};

export default LeftToolbar;

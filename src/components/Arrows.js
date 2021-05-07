import React from "react";
import { CgChevronRight, CgChevronLeft } from "react-icons/all";

const Arrows = ({ setDatePlus }) => {
  return (
    <div className="arrows">
      <section>
        <button onClick={() => setDatePlus((prev) => prev - 1)}>
          <CgChevronLeft />
        </button>
      </section>

      <section>
        <button onClick={() => setDatePlus((prev) => prev + 1)}>
          <CgChevronRight />
        </button>
      </section>
    </div>
  );
};

export default Arrows;

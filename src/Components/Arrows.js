import React from "react";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/all";

const Arrows = ({ setDatePlus }) => {
  return (
    <div className="arrows">
      <section>
        <button onClick={() => setDatePlus((prev) => prev - 1)}>
          <CgArrowLeftO />
        </button>
      </section>

      <section>
        <button onClick={() => setDatePlus((prev) => prev + 1)}>
          <CgArrowRightO />
        </button>
      </section>
    </div>
  );
};

export default Arrows;

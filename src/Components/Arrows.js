import React from "react";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/all";

const Arrows = ({ DATE_INCREMENTER, DATE_DECREMENTER }) => {
  return (
    <div className="arrows">
      <section>
        <button onClick={DATE_DECREMENTER}>
          <CgArrowLeftO />
        </button>
      </section>

      <section>
        <button onClick={DATE_INCREMENTER}>
          <CgArrowRightO />
        </button>
      </section>
    </div>
  );
};

export default Arrows;

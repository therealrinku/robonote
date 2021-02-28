import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/all";

const Arrows = ({ setDatePlus }) => {
  return (
    <div className="arrows">
      <section>
        <button onClick={() => setDatePlus((prev) => prev - 1)}>
          <AiOutlineArrowLeft />
        </button>
      </section>

      <section>
        <button onClick={() => setDatePlus((prev) => prev + 1)}>
          <AiOutlineArrowRight />
        </button>
      </section>
    </div>
  );
};

export default Arrows;

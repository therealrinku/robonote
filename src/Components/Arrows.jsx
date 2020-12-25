import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/all";

const Arrows = ({ setChangedDays }) => {
  return (
    <Wrapper>
      <div className="arrow_left">
        <button onClick={() => setChangedDays((prev) => prev - 1)}>
          <CgArrowLeftO />
        </button>
      </div>

      <div className="arrow_right">
        <button onClick={() => setChangedDays((prev) => prev + 1)}>
          <CgArrowRightO />
        </button>
      </div>
    </Wrapper>
  );
};

export default Arrows;

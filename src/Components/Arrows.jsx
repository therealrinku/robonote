import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/all";

const Arrows = ({ DATE_INCREMENTER, DATE_DECREMENTER }) => {
  return (
    <Wrapper>
      <div className="arrow_left">
        <button onClick={DATE_DECREMENTER}>
          <CgArrowLeftO />
        </button>
      </div>

      <div className="arrow_right">
        <button onClick={DATE_INCREMENTER}>
          <CgArrowRightO />
        </button>
      </div>
    </Wrapper>
  );
};

export default Arrows;

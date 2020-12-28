import React from "react";
import HelpTooltip from "./HelpTooltip";

const TodoDate = ({ formatedDate }) => {
  return (
    <div className="todo--date">
      <h4>{formatedDate}</h4>
      <HelpTooltip />
    </div>
  );
};

export default TodoDate;

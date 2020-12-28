import React from "react";

const TodoDate = ({ formatedDate, datePlus }) => {
  return (
    <div className="todo--date">
      <i className={datePlus === 0 ? "date-today" : null}></i>
      <h4 className={datePlus < 0 ? "date-backward" : null}>{formatedDate}</h4>
    </div>
  );
};

export default TodoDate;

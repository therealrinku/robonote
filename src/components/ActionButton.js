import React from "react";
import { NavLink } from "react-router-dom";

const ActionButton = ({ text }) => {
  return (
    <NavLink to="/signup" className="action--button">
      {text}
    </NavLink>
  );
};

export default ActionButton;

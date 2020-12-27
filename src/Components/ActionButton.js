import React from "react";

const ActionButton = ({ text }) => {
  return (
    <a href="/signup" className="action--button">
      {text}
    </a>
  );
};

export default ActionButton;

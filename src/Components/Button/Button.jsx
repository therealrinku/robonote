import React from "react";
import "./Button.scss";

const Button = ({ className, name, onClick, hide }) => {
  return (
    <button
      className={`${className}  center_me`}
      onClick={onClick}
      style={hide ? { display: "none" } : null}
    >
      {name}
    </button>
  );
};

export default Button;

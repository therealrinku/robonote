import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/Logo.png";

const Nav1 = () => {
  return (
    <nav className="landingpage--nav">
      <div>
        <NavLink to="/">
          <img src={LogoImage} alt="logo" />
          <p>haveTodo</p>
        </NavLink>
      </div>

      <div>
        <NavLink to="/login">Try for free</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </nav>
  );
};

export default Nav1;

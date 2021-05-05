import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/Logo.png";

const Nav1 = () => {
  return (
    <nav className="landingpage--nav">
      <div>
        <NavLink to="/">
          <img src={LogoImage} alt="logo" />
          <p>Falloora</p>
        </NavLink>
      </div>

      <div>
        <NavLink to="/signup">Try for free</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Nav1;

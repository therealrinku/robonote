import React from "react";

import LogoImage from "../assets/Logo.png";
import HelpTooltip from "./HelpTooltip";

const Nav2 = ({ history, currentUser, SIGNOUT }) => {
  return (
    <nav className="homepage--nav">
      <section>
        <button className="logo" onClick={() => history.push("/home")}>
          <img src={LogoImage} alt="logo" />
          <p>haveTodo</p>
        </button>
      </section>

      <section>
        <HelpTooltip />
        <p>{currentUser.slice(0, currentUser.indexOf("@"))}</p>
        <button onclick={SIGNOUT}>Logout</button>
      </section>
    </nav>
  );
};

export default Nav2;

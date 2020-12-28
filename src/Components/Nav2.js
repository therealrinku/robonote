import React from "react";
import { RiLogoutCircleRLine } from "react-icons/all";

import LogoImage from "../assets/Logo.png";

const Nav2 = ({ history, currentUser, SIGNOUT }) => {
  return (
    <nav className="homepage--nav">
      <section>
        <button className="logo" onClick={() => history.push("/app")}>
          <img src={LogoImage} alt="logo" />
          <p>haveTodo</p>
        </button>
      </section>

      <section>
        <button>{currentUser.slice(0, currentUser.indexOf("@"))}</button>

        <button onclick={SIGNOUT}>
          <RiLogoutCircleRLine />
          <p>Logout</p>
        </button>
      </section>
    </nav>
  );
};

export default Nav2;

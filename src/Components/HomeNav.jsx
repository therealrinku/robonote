import React from "react";
import { RiLogoutCircleRLine } from "react-icons/all";
import LogoImage from "../Assets/logo.png";

const HomeNav = ({ currentUser, SIGNOUT, history }) => {
  return (
    <nav className="homepage_nav">
      <section>
        <button className="logo" onClick={() => history.push("/app")}>
          <img src={LogoImage} alt="logo" />
          <p>haveTodo</p>
        </button>
      </section>

      <section>
        <button>{currentUser.slice(0, currentUser.indexOf("@"))}</button>

        <button onClick={SIGNOUT}>
          <RiLogoutCircleRLine />
          <p>Logout</p>
        </button>
      </section>
    </nav>
  );
};

export default HomeNav;

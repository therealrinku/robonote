import React from "react";
import { withRouter } from "react-router-dom";

import LogoImage from "../Assets/logo.png";
import Button from "../Components/Button/Button";
import "../sass/landingPageNav.scss";

const LandingPageNav = ({ history, mode }) => {
  return (
    <nav className="landing_page_nav">
      <section className="logo_section">
        <button className="logo" onClick={() => history.push("/")}>
          <img src={LogoImage} alt="logo" />
          <p className="hide_me_on_small_screen">haveTodo</p>
        </button>
      </section>

      <section className="action_buttons">
        <Button
          onClick={() => history.push("/signup")}
          hide={mode === "signup"}
          name="Try now"
          className="navbar_signup__btn"
        />
        <Button
          onClick={() => history.push("/login")}
          hide={mode === "login" ? { display: "none" } : null}
          name="Login"
          className="navbar_login__btn"
        />
      </section>
    </nav>
  );
};

export default withRouter(LandingPageNav);

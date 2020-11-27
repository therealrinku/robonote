import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Footer from "./footer";
import LandingPageNav from "./landingPageNav";
import { BsEye, BsEyeSlash } from "react-icons/all";

import "../sass/loginSignupPage.scss";

const LoginSignupPage = ({ history }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const mode = history.location.pathname.slice(1);

  return (
    <Wrapper className="login_signup_page">
      <LandingPageNav mode={mode} />
      <p className="title">
        {mode === "signup"
          ? "You will haveTodo for 30 days completely free."
          : "Login because you haveTodo."}
      </p>
      <form>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" id="email" autoFocus />
        </div>

        <div className="password">
          <label htmlFor="password">password</label>
          <div className="password_in">
            <input type={visiblePassword ? "text" : "password"} id="password" />
            <button
              type="button"
              onClick={() => setVisiblePassword((prev) => !prev)}
            >
              {!visiblePassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>

        <button>
          {mode === "signup" ? "I want to haveTodo" : "I haveTodo"}
        </button>
      </form>
      <Footer />
    </Wrapper>
  );
};

export default LoginSignupPage;

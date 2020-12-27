import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/all";
import Nav1 from "../components/Nav1";
import Footer from "../components/Footer";

const Auth = ({ history }) => {
  const signupMode = history.location.pathname === "/signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <div className="auth--page">
      <Nav1 />

      <div className="auth--title">
        <p>
          {signupMode
            ? "You will haveTodo for 15 days completely free."
            : "Login because you haveTodo."}
        </p>
      </div>

      <form className="auth--form">
        <div className="email">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">password</label>
          <div>
            <input
              type={visiblePassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setVisiblePassword((prev) => !prev)}
            >
              {!visiblePassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>

        <button className="auth--submit-button">
          {signupMode ? "I want to haveTodo" : "I haveTodo"}
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Auth;

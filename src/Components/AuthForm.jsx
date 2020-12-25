import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/all";
import Wrapper from "../Wrapper/Wrapper";

const AuthForm = ({ signingUp }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper className="auth_form_page">
      <p className="title">
        {signingUp
          ? "You will haveTodo for 15 days completely free."
          : "Login because you haveTodo."}
      </p>
      <form className="auth_form">
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
          <div className="password_in">
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

        <button>{signingUp ? "I want to haveTodo" : "I haveTodo"}</button>
      </form>
    </Wrapper>
  );
};

export default AuthForm;

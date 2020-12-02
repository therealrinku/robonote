import React, { useState, useContext } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Footer from "./footer";
import LandingPageNav from "./landingPageNav";
import { BsEye, BsEyeSlash } from "react-icons/all";
import CreateUser from "../Functions/createUser";
import LoginTheUser from "../Functions/loginTheUser";
import Context from "../context";

import "../sass/loginSignupPage.scss";

const LoginSignupPage = ({ history }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUserEmail } = useContext(Context);

  const mode = history.location.pathname.slice(1);

  const SignUp = (e) => {
    e.preventDefault();
    CreateUser(email, password).then((res) => {
      if (res === "done") {
        LoginTheUser(email, password).then((res1) => {
          if (res1 === "done") {
            setCurrentUserEmail(email);
            history.push("/app");
          } else {
            alert(res1);
          }
        });
      } else {
        alert(res);
      }
    });
  };

  const Login = (e) => {
    e.preventDefault();
    LoginTheUser(email, password).then((res1) => {
      if (res1 === "done") {
        setCurrentUserEmail(email);
        history.push("/app");
      } else {
        alert(res1);
      }
    });
  };

  return (
    <Wrapper className="login_signup_page">
      <LandingPageNav mode={mode} />
      <p className="title">
        {mode === "signup"
          ? "You will haveTodo for 30 days completely free."
          : "Login because you haveTodo."}
      </p>
      <form onSubmit={mode === "signup" ? SignUp : Login}>
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

        <button>
          {mode === "signup" ? "I want to haveTodo" : "I haveTodo"}
        </button>
      </form>
      <Footer />
    </Wrapper>
  );
};

export default LoginSignupPage;

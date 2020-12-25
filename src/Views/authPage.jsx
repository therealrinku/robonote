import React, { Fragment, useState } from "react";
import Footer from "./footer";
import LandingPageNav from "./landingPageNav";
import { LOGIN } from "../redux/user/userActions";

import "../sass/_authForm.scss";
import Form from "../Components/AuthForm";

const AuthPage = ({ history }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signingUp = history.location.pathname === "/signup";

  return (
    <Fragment>
      <LandingPageNav />
      <Form
        signingUp={signingUp}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        visiblePassword={visiblePassword}
        setVisiblePassword={setVisiblePassword}
      />
      <Footer />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: () => dispatch(LOGIN()),
  };
};

export default AuthPage;

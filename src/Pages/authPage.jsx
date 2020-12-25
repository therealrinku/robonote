import React, { Fragment, useState } from "react";
import Footer from "./footer";
import LandingPageNav from "./landingPageNav";
import * as userActions from "../redux/user/userActions";
import Form from "../Components/AuthForm";
import { connect } from "react-redux";

const AuthPage = ({ history, LOGIN, SIGNUP }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signingUp = history.location.pathname === "/signup";

  const AuthHandler = (e) => {
    e.preventDefault();
    if (signingUp) {
      SIGNUP(email, password);
    } else {
      LOGIN(email, password);
    }
  };

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
        authHandler={AuthHandler}
      />
      <Footer />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (email, password) => dispatch(userActions.LOGIN(email, password)),
    SIGNUP: (email, password) => dispatch(userActions.SIGNUP(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(AuthPage);

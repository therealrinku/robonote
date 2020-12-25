import React, { Fragment } from "react";
import Footer from "./footer";
import LandingPageNav from "./landingPageNav";

import "../sass/_authForm.scss";
import Form from "../Components/AuthForm";

const AuthPage = ({ history }) => {
  const signingUp = history.location.pathname === "/signup";

  return (
    <Fragment>
      <LandingPageNav />
      <Form signingUp={signingUp} />
      <Footer />
    </Fragment>
  );
};

export default AuthPage;

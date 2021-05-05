import React, { Fragment } from "react";
import Nav1 from "../components/Nav1";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LandingPageMain from "../components/LandingPageMain";

const LandingPage = ({ CURRENTUSER }) => {
  return (
    <Fragment>
      <Nav1 />
      <LandingPageMain />
      <Footer />
      {CURRENTUSER ? <Redirect to="/home" /> : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    CURRENTUSER: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(LandingPage);

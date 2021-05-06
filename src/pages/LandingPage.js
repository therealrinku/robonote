import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LandingPageMain from "../components/LandingPageMain";

const LandingPage = ({ CURRENTUSER }) => {
  return (
    <Fragment>
      <LandingPageMain />
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

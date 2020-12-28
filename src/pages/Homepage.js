import React from "react";
import { connect } from "react-redux";
import Arrows from "../components/Arrows";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import * as userActions from "../redux/user/userActions";

const Homepage = ({ CURRENTUSER }) => {
  return (
    <div className="homepage">
      <Nav2 currentUser={CURRENTUSER} />
      <Arrows />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

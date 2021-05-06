import { Fragment } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";

import Auth from "../pages/Auth";
import LandingPage from "../pages/LandingPage";
import Homepage from "../pages/Homepage";
import Layout from "./Layout";

const App = ({ CURRENTUSER, LOGIN_WITH_EMAIL }) => {
  const localStorageEmail = localStorage.getItem("email");

  if (localStorageEmail) {
    LOGIN_WITH_EMAIL(localStorageEmail);
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Auth} />
          <Route path="/signup" exact component={Auth} />
          <Route path="/home" exact component={Homepage} />
        </Switch>
        {CURRENTUSER ? <Redirect to="/home" /> : null}
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN_WITH_EMAIL: (email) => dispatch(userActions.LOGIN_WITH_EMAIL(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

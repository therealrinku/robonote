import { Fragment } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "../pages/Auth";
import LandingPage from "../pages/LandingPage";
import Homepage from "../pages/Homepage";

const App = ({ CURRENTUSER }) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Auth} />
          <Route path="/signup" exact component={Auth} />
          <Route path="/home" exact component={Homepage} />
        </Switch>
        {CURRENTUSER ? <Redirect to="/home" /> : null}
      </BrowserRouter>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    CURRENTUSER: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(App);

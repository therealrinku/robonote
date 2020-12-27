import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../pages/Auth";
import LandingPage from "../pages/LandingPage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Auth} />
          <Route path="/signup" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;

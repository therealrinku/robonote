import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Landingpage from "./Pages/landingPage";
import AuthPage from "./Pages/authPage";
import Homepage from "./Pages/homepage";
import { connect } from "react-redux";
import "./sass/main.scss";

function App({ currentUser }) {
  return (
    <Wrapper>
      <Router>
        <Route path="/" exact component={Landingpage} />
        <Route path="/signup" exact component={AuthPage} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/app" exact component={Homepage} />
        {currentUser ? <Redirect to="/app" /> : null}
      </Router>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(App);

import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Landingpage from "./Views/landingPage";
import AuthPage from "./Views/authPage";
import TodoApp from "./Views/todoApp";
import { connect } from "react-redux";

function App({ currentUser }) {
  return (
    <Wrapper>
      <Router>
        <Route path="/" exact component={Landingpage} />
        <Route path="/signup" exact component={AuthPage} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/app" exact component={TodoApp} />
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

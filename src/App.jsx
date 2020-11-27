import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./Views/landingPage";
import LoginSignupPage from "./Views/loginSignupPage";
import TodoApp from "./Views/todoApp";

function App() {
  return (
    <Wrapper className="App">
      <Router>
        <Route path="/" exact component={Landingpage} />
        <Route path="/signup" exact component={LoginSignupPage} />
        <Route path="/login" exact component={LoginSignupPage} />
        <Route path="/app" exact component={TodoApp} />
      </Router>
    </Wrapper>
  );
}

export default App;

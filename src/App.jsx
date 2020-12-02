import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./Views/landingPage";
import LoginSignupPage from "./Views/loginSignupPage";
import TodoApp from "./Views/todoApp";
import Context from "./context";
import { useState } from "react";

function App() {
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  return (
    <Wrapper className="App">
      <Context.Provider
        value={{
          currentUserEmail: currentUserEmail,
          setCurrentUserEmail: setCurrentUserEmail,
        }}
      >
        <Router>
          <Route path="/" exact component={Landingpage} />
          <Route path="/signup" exact component={LoginSignupPage} />
          <Route path="/login" exact component={LoginSignupPage} />

          <Route path="/app" exact component={TodoApp} />
        </Router>
      </Context.Provider>
    </Wrapper>
  );
}

export default App;

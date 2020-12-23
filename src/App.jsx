import Wrapper from "./Wrapper/Wrapper";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Landingpage from "./Views/landingPage";
import LoginSignupPage from "./Views/loginSignupPage";
import TodoApp from "./Views/todoApp";
import Context from "./context";
import { useState } from "react";
import Cryptr from "cryptr";

function App() {
  const cryptr = new Cryptr("blahblahblah01235692");
  const emailToken = localStorage.getItem("token");
  const dataToDecrypt = emailToken !== null ? emailToken : "dumm";
  const decryptedEmail =
    emailToken !== null ? cryptr.decrypt(dataToDecrypt) : null;
  const [currentUserEmail, setCurrentUserEmail] = useState(
    emailToken !== null ? decryptedEmail : ""
  );

  const redirectIfLoggedIn = emailToken !== null ? <Redirect to="/app" /> : "";

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
          {redirectIfLoggedIn}
        </Router>
      </Context.Provider>
    </Wrapper>
  );
}

export default App;

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/all";
import Nav1 from "../components/Nav1";
import Footer from "../components/Footer";
import ErrorViewer from "../components/ErrorViewer";
import * as userActions from "../redux/user/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Auth = ({ history, CURRENTUSER, ERROR, LOADING, LOGIN, SIGNUP }) => {
  const signupMode = history.location.pathname === "/signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (!LOADING) {
      if (signupMode) {
        SIGNUP(email, password);
      } else {
        LOGIN(email, password);
      }
    }
  };

  return (
    <div className="auth--page">
      <Nav1 />

      <div className="auth--title">
        <p>{signupMode ? "Get free trial without credit card." : "Start your journey to the moon."}</p>
      </div>

      <form className="auth--form" onSubmit={FormSubmitHandler}>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" id="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="password">
          <label htmlFor="password">password</label>
          <div>
            <input
              type={visiblePassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => setVisiblePassword((prev) => !prev)}>
              {!visiblePassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>

        <button className={LOADING ? "auth--submit-button-loading auth-submit-button" : "auth--submit-button"}>
          {LOADING ? "please wait..." : signupMode ? "Sign me up" : "Log me in"}
        </button>

        {ERROR ? <ErrorViewer error={ERROR} /> : null}
      </form>
      <Footer />

      {CURRENTUSER ? <Redirect to="/home" /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ERROR: state.user.error,
    LOADING: state.user.loading,
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (email, password) => dispatch(userActions.LOGIN(email, password)),
    SIGNUP: (email, password) => dispatch(userActions.SIGNUP(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

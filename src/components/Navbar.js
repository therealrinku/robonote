import { NavLink } from "react-router-dom";
import LogoImage from "../assets/Logo.png";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";
import { Fragment } from "react";

const Nav1 = ({ history, currentUser, signOut }) => {
  return (
    <Fragment>
      {!currentUser ? (
        <nav className="landingpage--nav">
          <div>
            <NavLink to="/">
              <img src={LogoImage} alt="logo" />
              <p>Falloora</p>
            </NavLink>
          </div>

          <div>
            <NavLink to="/signup">Try for free</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
      ) : (
        <nav className="homepage--nav">
          <section>
            <button className="logo" onClick={() => history.push("/home")}>
              <p>Falloora</p>
            </button>
          </section>

          <section>
            <p>{currentUser?.slice(0, currentUser?.indexOf("@"))}</p>
            <button onClick={signOut}>Logout</button>
          </section>
        </nav>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(null, mapDispatchToProps)(Nav1);

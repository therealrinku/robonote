import LogoImage from "../assets/Logo.png";
import HelpTooltip from "./HelpTooltip";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";

const Nav2 = ({ history, currentUser, signOut }) => {
  return (
    <nav className="homepage--nav">
      <section>
        <button className="logo" onClick={() => history.push("/home")}>
          <img src={LogoImage} alt="logo" />
          <p>Falloora</p>
        </button>
      </section>

      <section>
        <HelpTooltip />
        <p>{currentUser?.slice(0, currentUser?.indexOf("@"))}</p>
        <button onClick={signOut}>Logout</button>
      </section>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(null, mapDispatchToProps)(Nav2);

import { connect } from "react-redux";
import Footer from "./Footer";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Layout = ({ children, currentUser }) => {
  return (
    <>
      {currentUser ? <Nav2 currentUser={currentUser} /> : <Nav1 />}
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Layout);

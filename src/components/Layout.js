import { connect } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, currentUser }) => {
  return (
    <>
      <Navbar currentUser={currentUser} />
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

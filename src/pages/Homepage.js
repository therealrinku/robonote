import React, { useState } from "react";
import { connect } from "react-redux";
import Arrows from "../components/Arrows";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import TodoPage from "../components/TodoPage";
import * as userActions from "../redux/user/userActions";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Homepage = ({ CURRENTUSER, SIGNOUT }) => {
  const [datePlus, setDatePlus] = useState(0);

  const formatedDate = moment(
    moment(new Date()).add({ days: datePlus })
  ).format("ddd MMM Do YYYY");

  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="homepage">
      <Nav2 currentUser={CURRENTUSER} SIGNOUT={SIGNOUT} />
      <TodoPage
        todos={[
          { value: "hello", done: true },
          { value: "testing", done: false },
        ]}
        formatedDate={formatedDate}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        datePlus={datePlus}
      />
      <Arrows setDatePlus={setDatePlus} />
      {!CURRENTUSER ? <Redirect to="/" /> : null}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

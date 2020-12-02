import React from "react";

const Context = React.createContext({
  currentUserEmail: "",
  setCurrentUserEmail: () => {},
});

export default Context;

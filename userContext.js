import React from "react";

const UserContext = React.createContext({ currentUserEmail: "", setEmailAddress: () => {} });

export default UserContext;

import React from "react";

const UserContext = React.createContext({ email: "", setEmailAddress: () => {} });

export default UserContext;

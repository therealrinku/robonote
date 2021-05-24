import { useState } from "react";
import "../styles/globals.css";
import UserContext from "../userContext";

export default function MyApp({ Component, pageProps }) {
  const [currentUserEmail, setEmailAddress] = useState("");

  return (
    <UserContext.Provider value={{ currentUserEmail, setEmailAddress }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

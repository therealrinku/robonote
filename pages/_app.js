import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import UserContext from "../userContext";

export default function MyApp({ Component, pageProps }) {
  const [currentUserEmail, setEmailAddress] = useState("");

  return (
    <Layout>
      <UserContext.Provider value={{ currentUserEmail, setEmailAddress }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

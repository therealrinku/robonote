import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import UserContext from "../userContext";

export default function MyApp({ Component, pageProps }) {
  const [email, setEmailAddress] = useState("");

  return (
    <Layout>
      <UserContext.Provider value={{ email, setEmailAddress }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

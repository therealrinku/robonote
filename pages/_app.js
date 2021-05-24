import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import UserContext from "../userContext";

export default function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <UserContext.Provider value={{ email, setEmail }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

import Layout from "../components/Layout";
import "../styles/globals.css";
import UserContext from "../userContext";

export default function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");

  return (
    <UserContext value={{ email, setEmail }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext>
  );
}

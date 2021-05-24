import Meta from "../components/Meta";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";
import { useContext, useEffect, useState } from "react";
import UserContext from "../userContext";
import { db } from "../firebase/main";

export default function Home() {
  const { currentUserEmail, setEmailAddress } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (!loginToken) {
      setLoading(false);
    }
    if (loginToken && !currentUserEmail) {
      db.collection("users")
        .doc(loginToken)
        .get()
        .then((doc) => {
          setEmailAddress(doc.data()?.email);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      <Meta />
      {!loading ? <>{currentUserEmail ? <HomePage /> : <LandingPage />}</> : null}
    </>
  );
}

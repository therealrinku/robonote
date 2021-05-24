import Meta from "../components/Meta";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  const [tokenIsThere, setTokenIsThere] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      setTokenIsThere(true);
    }
  }, []);

  return (
    <>
      <Meta />
      {tokenIsThere ? <HomePage /> : <LandingPage />}
    </>
  );
}

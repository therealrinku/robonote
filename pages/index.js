import Footer from "../components/Footer";
import HomeSectionFour from "../components/HomeSectionFour";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionThree from "../components/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      router.push("/app");
    }
  }, []);

  return (
    <>
      <Meta />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <Footer />
    </>
  );
}

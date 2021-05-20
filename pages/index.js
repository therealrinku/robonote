import Footer from "../components/Footer";
import HomeSectionFour from "../components/HomeSectionFour";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionThree from "../components/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Meta from "../components/Meta";

export default function Home() {
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

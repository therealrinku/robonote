import homepageStyles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const HomepageOne = () => {
  const router = useRouter();

  return (
    <div className={homepageStyles.homeSectionOne}>
      <h3>Snaptask is your new todo list manager for maximum productivity.</h3>
      <section>
        <input type="text" placeholder="Type your email here" />
        <button onClick={() => router.push("/signup")}>Get Started Now</button>
      </section>
    </div>
  );
};

export default HomepageOne;

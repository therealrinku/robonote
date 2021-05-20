import homepageStyles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";

const HomepageOne = () => {
  const router = useRouter();

  return (
    <div className={homepageStyles.homeSectionOne}>
      <section>
        <h2>Snaptask is your new todo list manager to help you acheive your goals.</h2>
        <div>
          <input type="text" placeholder="Type your email here" />
          <button onClick={() => router.push("/signup")}>Start for free</button>
        </div>
      </section>

      <section>
        <img src={MainImage} alt="test" />
      </section>
    </div>
  );
};

export default HomepageOne;

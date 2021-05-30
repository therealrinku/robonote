import landingPageStyles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";
import Navbar from "../components/Navbar";
import { GoBrowser } from "react-icons/go";
import { BiMoon } from "react-icons/bi";
import { AiOutlineDrag } from "react-icons/ai";
import { RiStarLine } from "react-icons/ri";

export default function LandingPage() {
  const router = useRouter();

  //features
  const features = [
    {
      p: "Simplicity is very important for the peace of mind, that's why we've created simple and minimal layout.",
      h4: "Easy to use simple and minimal design",
      img: <GoBrowser />,
    },
    {
      p: "Dark mode is considered a very important feature these days, so how could we miss that.",
      h4: "Default dark mode for better eye",
      img: <BiMoon />,
    },
    {
      p: "Drag and drop todos to nearby dates if you have no time to do it today.",
      h4: "Drag and drop feature",
      img: <AiOutlineDrag />,
    },
    {
      p: "We update taskyoxx regularly to remove bugs and most importantly we listen to your suggestions.",
      h4: "Regular improvements",
      img: <RiStarLine />,
    },
  ];

  //reviews
  const reviews = [
    {
      userImageUrl: "https://bit.ly/2T9n057",
      userName: "Jennifer Rodriguez",
      review: "Snaptask is simply the best todo app i have ever used.",
    },
    {
      userImageUrl: "https://bit.ly/33XNNn5",
      userName: "Abella Fernandes",
      review: "Snaptask is very simple and easy to use todo app to get more done with less distractions.",
    },
    {
      userImageUrl: "https://bit.ly/3fN3kf1",
      userName: "Tom Zack",
      review: "Simply the best todo app with minmalistic design.",
    },
    {
      userImageUrl: "https://bit.ly/2T5kgFL",
      userName: "Blake Robbins",
      review: "I wanted a todo app with less distractive looks and simple design , well i got one now.",
    },
    {
      userImageUrl: "https://bit.ly/3416CFK",
      userName: "Tony Heaton",
      review: "My search for best todo app has come to an end , thanks to snaptask.",
    },
    {
      userImageUrl: "https://bit.ly/3hG8P1t",
      userName: "Bella Porch",
      review: "Best todo app i have ever seen, minimal and simple no hassle.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={landingPageStyles.landingPage}>
        <section className={landingPageStyles.sectionOne}>
          <img src={MainImage} alt="test" />

          <h2>taskyoxx is a new todo list manager for your better productivity and organization.</h2>
          <p>
            With minimal and easy to use design, we are ready to take over the productivity world, people in tech giants
            like yoxx are already using taskyoxx.
          </p>

          <button onClick={() => router.push("/signup")}>Get Started</button>
        </section>

        <section className={landingPageStyles.sectionTwo}>
          {features.map((feature) => {
            return (
              <div>
                <i>{feature.img}</i>
                <h4>{feature.h4}</h4>
                <p>{feature.p}</p>
              </div>
            );
          })}
        </section>

        {/*
      <div className={landingPageStyles.sectionThree}>
        <div>
          {reviews.splice(0, 3).map((review) => {
            return (
              <section>
                <div>
                  <img src={review.userImageUrl} alt="user" />
                  <span>{review.userName}</span>
                </div>

                <p>{review.review}</p>
              </section>
            );
          })}
        </div>

        <div>
          {reviews.splice(-3).map((review) => {
            return (
              <section>
                <div>
                  <img src={review.userImageUrl} alt="user" />
                  <span>{review.userName}</span>
                </div>

                <p>{review.review}</p>
              </section>
            );
          })}
        </div>
      </div>

      <footer className={landingPageStyles.footer}>
        <p>2021 Snaptask Inc</p>
        <p>Made in Nepal</p>
        </footer>*/}
      </main>
    </>
  );
}

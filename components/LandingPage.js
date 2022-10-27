import landingPageStyles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";
import MainImage from "./MainImage";
import Navbar from "../components/Navbar";
import { GoBrowser } from "react-icons/go";
import { BiMoon } from "react-icons/bi";
import { AiOutlineDrag, AiOutlineDollar } from "react-icons/ai";
import { RiStarLine } from "react-icons/ri";
import Link from "next/link";

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
      p: "Drag and drop todos to nearby dates if you have no intentions of doing it today.",
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
      userImageUrl: "https://bit.ly/3i4iL5g",
      userName: "Jennifer Rodriguez",
      review: "taskyoxx is simply the best todo app i have ever used.",
    },
    {
      userImageUrl: "https://bit.ly/33XNNn5",
      userName: "Abella Fernandes",
      review: "taskyoxx is very simple and easy to use todo app to get more done with less distractions.",
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
      userImageUrl: "https://bit.ly/2RNBhEf",
      userName: "Tony Heaton",
      review: "My search for best todo app has come to an end , thanks to taskyoxx.",
    },
    {
      userImageUrl: "https://bit.ly/3fPkfgQ",
      userName: "Bella Porch",
      review: "Best todo app i have ever seen, minimal and simple no hassle.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={landingPageStyles.landingPage}>
        <section className={landingPageStyles.sectionOne}>
          <MainImage />

          <h2 style={{ marginTop: "25px" }}>
            taskyoxx is a new todo list manager for your better productivity and organization.
          </h2>
          <p>
            With minimal and easy to use design, we are ready to take over the productivity world, people in tech giants
            like yoxx are already using taskyoxx.
          </p>
          <button onClick={() => router.push("/signup")}>Get Started</button>
        </section>

        <section className={landingPageStyles.sectionTwo}>
          {features.map((feature, i) => {
            return (
              <div key={i}>
                <i>{feature.img}</i>
                <h4>{feature.h4}</h4>
                <p>{feature.p}</p>
              </div>
            );
          })}
        </section>

        <section className={landingPageStyles.sectionThree}>
          <img
            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/2x/external-quote-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png"
            alt="quote"
          />
          <div>
            {reviews.splice(0, 3).map((review, i) => {
              return (
                <section key={i}>
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
            {reviews.splice(-3).map((review, i) => {
              return (
                <section key={i}>
                  <div>
                    <img src={review.userImageUrl} alt="user" />
                    <span>{review.userName}</span>
                  </div>

                  <p>{review.review}</p>
                </section>
              );
            })}
          </div>
        </section>

        <section className={landingPageStyles.sectionFour}>
          <div>
            <i>
              <AiOutlineDollar />
            </i>
            <p>
              Well, you may be wondering if it's paid or free, well good for you because taskyoxx is currently free of
              cost but if you really loved it, you can contribute to us through our paypal.
            </p>
            <p>What are you waiting for then? Just hop in</p>
            <button onClick={() => router.push("/signup")}>Get Started</button>
            <p style={{ marginBottom: "-7px" }}>or</p>
            <br />
            <Link href="/demo">Try Demo</Link>
          </div>
        </section>

        <footer className={landingPageStyles.footer}>
          <section>
            <h4>taskyoxx</h4>
            <p>Built with ❤️ </p>
            <Link href="/demo">Try demo</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </section>
        </footer>
      </main>
    </>
  );
}

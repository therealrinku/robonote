import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import LandingPageNav from "./landingPageNav";
import Footer from "./footer";

import MainIllsutration from "../Assets/main.svg";
import ReviewStarImage from "../Assets/rating.png";
import Img from "../Assets/feature_img_test.png";

import "../sass/landingPage.scss";
import Button from "../Components/Button/Button";

const Landingpage = ({ history }) => {
  return (
    <Wrapper className="landing_page">
      <header>
        <LandingPageNav />
      </header>

      <main>
        <section className="landing_page_main_one">
          <div className="left">
            <p>
              We have to do a lot of things in our life.
              <br />
              That's why we have created haveTodo.
            </p>
            <Button
              onClick={() => history.push("/signup")}
              name="Try for free"
              className="action_btn"
            />
          </div>

          <div className="right">
            <img src={MainIllsutration} alt="main_image" />
          </div>
        </section>

        <section className="landing_page_main_two">
          <p>Some of the Satisfied Users have their say</p>
          <section className="reviews">
            <div className="review">
              <img src={ReviewStarImage} alt="stars" />
              <p>
                I have used a lot of todo apps but nothing feels like haveTodo
                because it's so simple and easy to use.
              </p>
            </div>

            <div className="review">
              <img src={ReviewStarImage} alt="stars" />
              <p>Simply the best task manager i've ever used in my life.</p>
            </div>
            <div className="review">
              <img src={ReviewStarImage} alt="stars" />
              <p>
                The thing that i like the most about haveTodo is it's simple
                interface and powerful features.
              </p>
            </div>
            <div className="review">
              <img src={ReviewStarImage} alt="stars" />
              <p>Nothing can beat the simplicity of haveTodo.</p>
            </div>
          </section>
        </section>

        <section className="landing_page_main_three">
          <section className="left">
            <img src={Img} alt="img" />
          </section>

          <section className="right">
            <p>
              As simple as it possibly could be,
              <br />
              Easy to use but powerful features.
            </p>
            <p>Access from web anywhere.</p>
            <Button
              onClick={() => history.push("/signup")}
              name="Get started for free"
              className="action_btn"
            />
          </section>
        </section>

        <section className="landing_page_main_four">
          <div className="feature_box">
            <p>Simple and easy to use interface.</p>
          </div>

          <div className="feature_box">
            <p>Free to get started.</p>
          </div>
          <div className="feature_box">
            <p>Won hearts of many great acheivers.</p>
          </div>
          <div className="feature_box">
            <p>Isn't that enough?</p>
          </div>
          <Button
            onClick={() => history.push("/signup")}
            name="I want to haveTodo"
            className="action_btn"
          />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};

export default Landingpage;

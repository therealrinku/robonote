import React, { Fragment } from "react";
import Nav1 from "../components/Nav1";
import Footer from "../components/Footer";
import ActionButton from "../components/ActionButton";

import MainIllustration from "../assets/Main.svg";
import StarImage from "../assets/Stars.png";
import MobileImage from "../assets/Mobile.png";

const LandingPage = () => {
  return (
    <Fragment>
      <Nav1 />

      <main className="landingpage--main">
        <section className="landingpage--section-one">
          <div>
            <p>
              We have to do a lot of things in our life.
              <br />
              That's why we have created haveTodo.
            </p>
            <ActionButton text="Get Started for free" />
          </div>

          <div>
            <img src={MainIllustration} alt="main_image" />
          </div>
        </section>

        <section className="landingpage--section-two">
          <p>Some of the Satisfied Users have their say</p>
          <section>
            <div>
              <img src={StarImage} alt="stars" />
              <p>
                I have used a lot of todo apps but nothing feels like haveTodo
                because it's so simple and easy to use.
              </p>
            </div>

            <div>
              <img src={StarImage} alt="stars" />
              <p>Simply the best task manager i've ever used in my life.</p>
            </div>
            <div>
              <img src={StarImage} alt="stars" />
              <p>
                The thing that i like the most about haveTodo is it's simple
                interface and powerful features.
              </p>
            </div>
            <div>
              <img src={StarImage} alt="stars" />
              <p>Nothing can beat the simplicity of haveTodo.</p>
            </div>
          </section>
        </section>

        <section className="landingpage--section-three">
          <section>
            <img src={MobileImage} alt="img" />
          </section>

          <section>
            <p>
              As simple as it possibly could be,
              <br />
              Easy to use but powerful features.
            </p>
            <p>Access from web anywhere.</p>
            <ActionButton text="Get Started Now" />
          </section>
        </section>

        <section className="landingpage--section-four">
          <div>
            <p>Simple and easy to use interface.</p>
          </div>

          <div>
            <p>Free to get started.</p>
          </div>
          <div>
            <p>Won hearts of many great acheivers.</p>
          </div>
          <div>
            <p>Isn't that enough?</p>
          </div>
          <ActionButton text="I want to haveTodo" />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default LandingPage;

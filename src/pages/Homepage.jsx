import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "../components/Helmet/Helmet";
import {
  Intro,
  About,
  Service,
  Couter,
  Overview,
  Team,
  Contact,
  Technology,
} from "../components/Home";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh({ duration: 3000 });
  }, []);
  return (
    <>
      <Helmet title={"Home "}>
        <Intro />
        <About />
        <Service />
        <Couter />
        <Overview />
        <Team />
        <Contact />
        <Technology />
      </Helmet>
    </>
  );
};

export default Homepage;

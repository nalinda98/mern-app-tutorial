import React from "react";
import HomepageBlog from "../components/HomepageBlog";
import Team from "../components/Team";
import Testomonial from "../components/Testomonial";
import AboutUs from "../components/AboutUs";
import HomeImage from "../components/HomeImage";
import HomeFacts from "../components/HomeFacts";
import Features from "../components/Features";
import Homemain from "../components/Homemain";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Homemain />
      {/* Full Screen Search Start */}
      <HomeImage />
      {/* Full Screen Search End */}

      {/* Facts Start */}
      <HomeFacts />
      {/* Facts End */}

      <AboutUs />

      {/* Features Start */}
      <Features />
      {/* Features End */}

      {/* Service Start */}
      <Services />
      {/* Service End */}


      <Testomonial />

      <Team />

      <HomepageBlog />

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Home;

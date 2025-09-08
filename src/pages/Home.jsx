import React from "react";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import HomeImage from "../components/HomeImage";
import About from "../components/About";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import TourDestination from "../components/TourDestination";
import Testomonial from "../components/Testomonial";
import FAQ from "../components/FAQ";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <div>
      <Element name="home">
        <HomeImage />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="destinations">
        <Destination />
      </Element>
      <Element name="faqs">
        <FAQ />
      </Element>

      <Element name="testimonials">
        <Testomonial />
      </Element>
      {/* <Element name="why-choose">
        <WhyChoose />
      </Element> */}
      {/* <Element name="tours">
        <TourDestination />
      </Element> */}
    </div>
  );
};

export default Home;

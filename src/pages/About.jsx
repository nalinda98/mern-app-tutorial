import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";

const About = () => (
  <>
    {/* Header Section */}
    <Header title={"About Us"} subtitle={"Who We Are"} />

    <AboutUs />

    <Team />

  </>
);

export default About;
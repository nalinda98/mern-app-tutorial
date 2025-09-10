import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Testomonial from "../components/Testomonial";

const Service = () => (
  <>
    {/* Header Section */}
    <Header title={"Our Services"} subtitle={"What We Do"} />

    {/* Service Section */}
    <Services />
    <Testomonial />
  </>
);

export default Service;
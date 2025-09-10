import React from "react";
import TourDestination from "../components/TourDestination";
import Destination from "../components/Destination";
import Header from "../components/Header";

const Destinations = () => {
  return (
    <div>
      <Header title="Destinations" subtitle={"Explore SriLanka"} />
      <TourDestination />
    </div>
  );
};

export default Destinations;

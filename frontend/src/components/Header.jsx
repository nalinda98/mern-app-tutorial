import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  return (
    <div>
      <div className="">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 ">
          <h4 className=" mt-0  text-white text-uppercase font-weight-bold">
            {location.pathname.split("/")[1] === "booking"
              ? location.pathname.split("/")[2] === "badminton"
                ? "Badminton Court Booking"
                : location.pathname.split("/")[2] === "cricket"
                ? "Cricket Court Booking"
                : location.pathname.split("/")[2] === "swimmingPool"
                ? "Swimming Pool Booking"
                : "Make A Reservation"
              : location.pathname.split("/")[1]}
          </h4>

          <div className="d-inline-flex">
            <p className="m-0 text-white">
              <Link className="text-white" to="/home">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">{location.pathname.split("/")[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

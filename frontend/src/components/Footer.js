import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className=" justify-content-center">
      <div className="footer container-fluid  mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div className="container">
          <div className="row pt-5  ">
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Get In Touch</h4>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>73, Barns
                Rathwaththa Mawatha, Balangoda.
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>+94 77 899 8588
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>boostsports5@gmail.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: "40px", height: "40px" }}
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: "40px", height: "40px" }}
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: "40px", height: "40px" }}
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: "40px", height: "40px" }}
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Our Services</h4>
              <div className="d-flex flex-column justify-content-start">
                <span className="text-white mb-2">
                  <i className="fa-solid fa-dumbbell mr-2"></i>Gymnasium
                </span>
                <span className="text-white mb-2">
                  <i className="fa-solid fa-utensils mr-2"></i>Restaurant
                </span>
                <span className="text-white mb-2">
                  <i className="fa-solid fa-person-swimming mr-2"></i>Swimming
                  Pool
                </span>
                <span className="text-white mb-2">
                  <i className="fa-regular fa-gem mr-2"></i>Gem Store
                </span>
                <span className="text-white mb-2">
                  <i className="fa-solid fa-medal mr-2"></i>Badminton Court
                </span>
                <span className="text-white">
                  <i className="fa-solid fa-baseball-bat-ball mr-2"></i>Cricket
                  Court
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Popular Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white mb-2" to="/">
                  <i className="fa fa-angle-right mr-2"></i>Home
                </Link>
                <Link className="text-white mb-2" to="/about/#">
                  <i className="fa fa-angle-right mr-2"></i>About Us
                </Link>
                <Link className="text-white mb-2" to="/feature/#">
                  <i className="fa fa-angle-right mr-2"></i>Our Features
                </Link>
                <Link className="text-white mb-2" to="/booking">
                  <i className="fa fa-angle-right mr-2"></i>Booking
                </Link>
                <Link className="text-white" to="/contact/#">
                  <i className="fa fa-angle-right mr-2"></i>Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Opening Hours</h4>
              <h5 className="text-white">Monday - Friday</h5>
              <p>6.00 AM - 9.00 PM</p>
              <h5 className="text-white">Saturday - Sunday</h5>
              <p>6.00 AM - 9.00 PM</p>
            </div>
          </div>
        </div>
        <div className="container border-top border-dark pt-5">
          <p className="m-0 text-center text-white">
            &copy;{" "}
            <Link
              className="text-white font-weight-bold"
              to="https://buildzoneit.com"
              target="_blank"
            >
              BuildZone IT Solutions
            </Link>
            - All Rights Reserved.
            {/* Designed by */}
            {/* <a className="text-white font-weight-bold" href="https://htmlcodex.com">
              HTML Codex
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

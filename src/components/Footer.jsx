import React from "react";

const Footer = () => {
  return (
    <footer
      className="ftco-footer bg-bottom ftco-no-pt"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
    >
      <div className="container">
        <div className="row mb-5">
          {/* About Us */}
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>
                At Kandy Tours, we offer personalized tours across the stunning
                island of Sri Lanka — from the golden beaches of the south to
                the lush tea plantations in the hill country and the ancient
                ruins of the Cultural Triangle. 
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                {/* <li>
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.facebook.com/kandy.tours.0777284460">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <span className="fa fa-instagram" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="py-2 d-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="py-2 d-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="py-2 d-block">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="py-2 d-block">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="py-2 d-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          {/* <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                {[
                  "Adventure",
                  "Hotel and Restaurant",
                  "Beach",
                  "Nature",
                  "Camping",
                  "Party",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="py-2 d-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Contact Info */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker" />
                    <span className="text">
                      135 A, Bogahalanda Walawwa, Galagedara
                    </span>
                  </li>
                  <li>
                    <a href="tel://+94777284460">
                      <span className="icon fa fa-phone" />
                      <span className="text">+94 77 72 84 460</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@kandytours.lk">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">info@kandytours.lk</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://kandytours.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon fa fa-globe" />
                      <span className="text">kandytours.lk</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              &copy; {new Date().getFullYear()} All rights reserved | Developed
              & Designed by{" "}
              <a
                href="https://buildzoneit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                BuildZone IT Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

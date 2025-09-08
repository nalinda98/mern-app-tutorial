import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Video Section */}
      <section
        className="ftco-section ftco-about img wow fadeIn"
        style={{ backgroundImage: "url(/images/bg_4.jpg)" }}
        data-wow-delay="0.2s"
      >
        {/* Optional Video Overlay Section */}
      </section>

      {/* About Text Section */}
      <section className="ftco-section ftco-about ftco-no-pt img">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row">
                {/* Left Image */}
                <div
                  className="col-md-6 d-flex align-items-stretch wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div
                    className="img d-flex w-100 align-items-center justify-content-center"
                    style={{ backgroundImage: "url(/images/about-1.jpg)" }}
                  ></div>
                </div>

                {/* Right Text */}
                <div
                  className="col-md-6 pl-md-5 py-5 wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section">
                      <span
                        className="subheading wow fadeInDown"
                        data-wow-delay="0.6s"
                      >
                        About Us
                      </span>
                      <h2 className="mb-4 wow fadeInUp" data-wow-delay="0.7s">
                        Discover Sri Lanka with Trusted Local Guides
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.8s">
                        At Kandy Tours, we offer personalized tours across the
                        stunning island of Sri Lanka — from the golden beaches
                        of the south to the lush tea plantations in the hill
                        country and the ancient ruins of the Cultural Triangle.
                      </p>
                      <p className="wow fadeInUp" data-wow-delay="0.9s">
                        Our experienced local guides ensure your travel is
                        immersive, safe, and unforgettable. Whether you're
                        chasing waterfalls, tasting spicy curries, or spotting
                        elephants in the wild, we’re here to make your journey
                        authentic and stress-free.
                      </p>
                      <p className="wow fadeInUp" data-wow-delay="1s">
                        <button
                          className="btn btn-primary"
                          onClick={() => navigate("/contact")}
                        >
                          Plan Your Sri Lankan Adventure
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Right Text */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

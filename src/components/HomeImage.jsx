import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.css";

const HomeImage = () => {
  const [isOpen, setOpen] = useState(false);
  const [bgImage, setBgImage] = useState("/images/bg_5.jpg");

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setBgImage("/images/bg_5M.jpg");
      } else {
        setBgImage("/images/bg_5.jpg");
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fullHeight =
    typeof window !== "undefined" ? window.innerHeight : "100vh";

  return (
    <div
      className="hero-wrap"
      style={{
        backgroundImage: `url("${bgImage}")`,
        height: fullHeight,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "-70px",
      }}
    >
      <div
        className="overlay"
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <div className="container h-100 d-flex align-items-center">
        <div className="row no-gutters slider-text w-100 align-items-center">
          <div className="col-md-7 text-white" data-aos="fade-up">
            <span className="subheading">Welcome to Ceylon</span>
            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
            <p className="caps">
              Travel to any corner of the world, without going around in
              circles.
            </p>
          </div>
          <div
            className="col-md-5 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="about" smooth={true} duration={1000}>
              <button
                onClick={() => setOpen(true)}
                className="icon-video d-flex align-items-center justify-content-center mb-4 btn btn-light rounded-circle"
                style={{ width: 60, height: 60 }}
                aria-label="Play Video"
              >
                <span className="fa fa-play" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId="45830194"
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
};

export default HomeImage;

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
    <div className="modal fade" id="searchModal" tabIndex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div
          className="modal-content"
          style={{ background: "rgba(9, 30, 62, .7)" }}
        >
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <div className="input-group" style={{ maxWidth: 600 }}>
              <input
                type="text"
                className="form-control bg-transparent border-primary p-3"
                placeholder="Type search keyword"
              />
              <button className="btn btn-primary px-4">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;

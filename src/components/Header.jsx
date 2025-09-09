import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div
      className="container-fluid bg-primary py-5 bg-header"
      style={{ marginBottom: 90 }}
    >
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{subtitle}</h1>
          <a href="/" className="h5 text-white">
            Home
          </a>
          <i className="far fa-circle text-white px-2"></i>
          <span className="h5 text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

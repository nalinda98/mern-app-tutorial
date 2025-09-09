import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0"
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-user-tie me-2"></i>Startup
        </h1>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Services
          </NavLink>
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              Blog
            </span>
            <div className="dropdown-menu m-0">
              <NavLink to="/blog" className="dropdown-item">
                Blog Grid
              </NavLink>
              <NavLink to="/detail" className="dropdown-item">
                Blog Detail
              </NavLink>
            </div>
          </div>
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              Pages
            </span>
            <div className="dropdown-menu m-0">
              <NavLink to="/price" className="dropdown-item">
                Pricing Plan
              </NavLink>
              <NavLink to="/feature" className="dropdown-item">
                Our features
              </NavLink>
              <NavLink to="/team" className="dropdown-item">
                Team Members
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                Testimonial
              </NavLink>
              <NavLink to="/quote" className="dropdown-item">
                Free Quote
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        <button
          type="button"
          className="btn text-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
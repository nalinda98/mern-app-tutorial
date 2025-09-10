import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0${!isTop ? " scrolled" : ""}`}
      style={{
        position: "fixed",
        top: isTop ? "40px" : "0px",
        left: 0,
        right: 0,
        width: "100%",
        background: isTop
          ? "rgba(9,30,62,0)"
          : "rgba(255,255,255,1)",
        transition: "background 0.3s, top 0.3s",
        zIndex: 1000,
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
          <NavLink to="/blog" className="nav-item nav-link">
            Blog
          </NavLink>
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              Destinations
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
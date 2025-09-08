import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const path = useLocation().pathname;
  const toggleNavbar = () => setIsNavOpen(!isNavOpen);

  // Helper to close nav on link click
  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleDropdownToggle = () => setIsDropdownOpen((open) => !open);
  const handleDropdownClose = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
      <div className="container">
        <img
          src="/images/logo.png"
          alt="Kandy Tours Logo"
          className="logo"
          style={{
            width: "70px",
            height: "70px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleNavLinkClick();
            window.location.href = "/";
          }}
        />
        <NavLink to="/" className="navbar-brand">
          Kandy Tours<span>Travel Agency</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/destinations"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Destinations
              </NavLink>
            </li>
            <li
              className={`nav-item dropdown${isDropdownOpen ? " show" : ""}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={handleDropdownClose}
            >
              <span
                className={`nav-link dropdown-toggle${
                  isDropdownOpen ? " show" : ""
                }`}
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                style={{ cursor: "pointer" }}
                onClick={handleDropdownToggle}
              >
                Packages
              </span>
              <div
                className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <NavLink
                  to="/packages/Tour10Days"
                  className="dropdown-item"
                  onClick={() => {
                    handleNavLinkClick();
                    handleDropdownClose();
                  }}
                >
                  10 Days Tour
                </NavLink>
                <NavLink
                  to="/packages/Tour6Days"
                  className="dropdown-item"
                  onClick={() => {
                    handleNavLinkClick();
                    handleDropdownClose();
                  }}
                >
                  6 Days Trinco Tour
                </NavLink>
                <NavLink
                  to="/packages/Tour5Days"
                  className="dropdown-item"
                  onClick={() => {
                    handleNavLinkClick();
                    handleDropdownClose();
                  }}
                >
                  5 Days Nuwaraeliya Tour
                </NavLink>
                <NavLink
                  to="/packages/Tour4Days"
                  className="dropdown-item"
                  onClick={() => {
                    handleNavLinkClick();
                    handleDropdownClose();
                  }}
                >
                  4 Days Sigiriya Tour
                </NavLink>
              </div>
            </li>
            {/* Future Links
            <li className="nav-item">
              <NavLink to="/hotel" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
                Hotel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
                Blog
              </NavLink>
            </li>
            */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

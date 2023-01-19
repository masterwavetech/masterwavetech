import React from "react";
import "./mobileStyled.css";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ hideMenu }) => {
  return (
    <div className="mobile_nav_wrapper" onClick={hideMenu}>
      <div className="close_btn" onClick={hideMenu}>
        <i className="ri-close-line"></i>
      </div>
      <ul className="mobile_navlink">
        <li>
          <NavLink
            to="/"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(navClass) => (navClass.isActive ? "nav__active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
        <div className="invoice_btn">
          <div className="default-btn">Pay Invoice</div>
        </div>
        <div className="social_icon">
          <h3>follow us:</h3>
          <div className="social-icon">
            <a href="/">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="/">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="/">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;

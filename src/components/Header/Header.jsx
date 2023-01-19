import React, { useState } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./HeaderStyled.css";
import logo from "../../Images/logo.png";
import black_logo from "../../Images/logo-black.png";
import MobileNavbar from "./MobileNavbar";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const add_class_on_scroll = () => header.classList.add("active");
    const remove_class_on_scroll = () => header.classList.remove("active");
    let scrollpos = window.scrollY;
    const scrollChange = 100;
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) {
      add_class_on_scroll();
      setIsActive(true);
    } else {
      remove_class_on_scroll();
      setIsActive(false);
    }
  });

  //Function for toggle menu
  const toggleMenu = () => {
    setShowMobile(!showMobile);
  };
  const hideMenu = () => {
    setShowMobile(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Container>
            <nav className="navbar">
              <div className="logo">
                <img src={isActive ? black_logo : logo} alt="masterwave" />
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/project"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="other-option">
                <div className="default-btn">Pay Invoice</div>
                {/* <div className="nav_icons">
                  <span className="toggle-btn">
                    <i className="ri-moon-fill" style={{ color: "pink" }}></i>
                    <i className="ri-sun-fill" style={{ color: "yellow" }}></i>
                    <div className="ball"></div>
                  </span>
                </div> */}

                <div className="mobile__menu" onClick={toggleMenu}>
                  <span>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </nav>
          </Container>
        </div>
      </header>
      {showMobile && <MobileNavbar hideMenu={hideMenu} />}
    </>
  );
};

export default Header;

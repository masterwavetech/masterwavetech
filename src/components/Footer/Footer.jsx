import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./FooterStyled.css";
import logo from "../../Images/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="subscribe-area">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="subscribe-content">
                  <h2>Sign Up Our Newsletter</h2>
                  <p>
                    We Offer An Informative Monthly Technology Newsletter -
                    Check It Out.
                  </p>
                </div>
              </Col>
              <Col lg="6" md="6">
                <form className="subscribe-form">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Subscribe Now
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-area">
          <Container>
            <Row>
              <Col lg="4" md="6">
                <div className="footer-heading">
                  <img src={logo} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedconsectetur adipiscing elit.
                  </p>
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
              </Col>
              <Col lg="3" md="6">
                <div className="quick-link">
                  <h3>Our services</h3>
                  <ul>
                    <li>
                      <Link to="/services">Web design</Link>
                    </li>
                    <li>
                      <Link to="/services">Web development</Link>
                    </li>
                    <li>
                      <Link to="/services">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/services">Search Engine Optimation</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="2" md="6">
                <div className="quick-link">
                  <h3>usefuls link</h3>
                  <ul>
                    <li>
                      <Link to="/about">about us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us </Link>
                    </li>
                    <li>
                      <Link to="/project">Portfolio</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="contact-link">
                  <h3>Contact info</h3>

                  <div className="footer-info-contact">
                    <i className="ri-phone-line"></i>
                    <h3>Phone</h3>
                    <span>
                      <a href="tel:+2348152966334">+2348152966334 </a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="ri-mail-line"></i>
                    <h3>Email</h3>
                    <span>
                      <a href="mailto:contact@masterwave.tech">
                        contact@masterwave.tech
                      </a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="ri-map-pin-line"></i>
                    <h3>Address</h3>
                    <span>No Physical Location</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <div className="copyright">
        <p className="footer__copyright">
          Copyright &copy; {year} developed by Masterwavetech. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "./styles/AboutStyled.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import aboutImag from "../../Images/about.jpg";

const About = () => {
  return (
    <>
      <section className="about__area section-padding">
        <Container>
          <Row>
            <Col
              lg="6"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="about-content">
                <h6>About Our Company</h6>
                <h2>
                  Providing your business with a quality IT service is our
                  passion.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam, nostrud
                </p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      IT Consulting <em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="projress" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Virtual Workstation <em>75%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="projress" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Managed IT Service <em>80%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="projress" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box">
                  <Link to="/about" className="default-btn">
                    Learn more<i className="flaticon-programming"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg="5"
              className="about-image-wrapper"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="about-image">
                <img src={aboutImag} alt="about us" />
                <div className="years-design">
                  <h2>2</h2>
                  <h5>Years Experience</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;

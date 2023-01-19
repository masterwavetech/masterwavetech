import React from "react";
import "./styles/ServiceStyled.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import serviceImg from "../../Images/web-development.png";
import marketImg from "../../Images/marketing.png";
import optimaImg from "../../Images/optimization.png";

const Services = () => {
  return (
    <>
      <section className="service__area section-padding">
        <Container>
          <Row>
            <Col lg="12">
              <div className="section-title">
                <h6>What We Do</h6>
                <h2>interactive service we offer</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="4"
              md="6"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src={serviceImg} alt="" />
                </div>
                <h3>IT Solution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="service-btn-link">
                  <Link to="/services" className="">
                    Learn more <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="6"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-delay="100"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src={optimaImg} alt="" />
                </div>
                <h3>IT Solution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="service-btn-link">
                  <Link to="/services" className="">
                    Learn more <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="6"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-delay="200"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src={marketImg} alt="" />
                </div>
                <h3>IT Solution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="service-btn-link">
                  <Link to="/services" className="">
                    Learn more <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;

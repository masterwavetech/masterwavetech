import React from "react";
import "./styles/OverviewStyled.css";
import { Container, Row, Col } from "reactstrap";
import masterwave from "../../Images/masterwave_logo.png";
import mantogo from "../../Images/mantogo.png";
import shopify from "../../Images/shopify.png";
import bigCommerce from "../../Images/bigCommerce.png";
import bootstrap from "../../Images/bootstrap.png";
import woo from "../../Images/wooecommerce.png";
const Overview = () => {
  return (
    <section className="overview__area section-padding">
      <Container>
        <Row>
          <Col lg="6">
            <div className="overview-image">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={masterwave} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="shopify__icon">
                <img src={shopify} alt="" />
              </div>
              <div className="mangento__icon">
                <img src={mantogo} alt="" />
              </div>
              <div className="bootstap__icon">
                <img src={bootstrap} alt="" />
              </div>
              <div className="bigCommerce__icon">
                <img src={bigCommerce} alt="" />
              </div>
              <div className="woo__icon">
                <img src={woo} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="overview-content">
              <h6>why choose us?</h6>
              <h2>
                Safeguard your brand with Cyber-Security &amp; IT Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="feature__item">
                <li>
                  <span>Remote It Assistance</span>
                </li>
                <li>
                  <span>Solving IT Problems</span>
                </li>
                <li>
                  <span>Practice IT Management</span>
                </li>
                <li>
                  <span>IT Security Services</span>
                </li>
                <li>
                  <span>Managed IT Service</span>
                </li>
                <li>
                  <span>Cloud Services</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Overview;

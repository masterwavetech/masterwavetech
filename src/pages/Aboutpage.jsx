import React, { useState } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { PageTitle } from "../components";
import { useLocation } from "react-router-dom";
import "./styles/Aboutstyled.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Team from "../components/Home/Team";

const Aboutpage = () => {
  const [counterOn, setCounterOn] = useState(false);
  const location = useLocation();
  const title = location.pathname.split("/")[1];
  return (
    <>
      <Helmet title={"About Us"}>
        <PageTitle title={title} />
        <section className="about__section section-padding">
          <Container>
            <Row>
              <Col lg="8">
                <div className="about_header">
                  <h1>Welcome to masterwave</h1>
                  <p>
                    Elogic was founded in&nbsp;2009&nbsp;as an&nbsp;ecommerce
                    development company with a&nbsp;specific focus
                    on&nbsp;Magento. After years of&nbsp;helping businesses
                    develop online stores, we&nbs
                    <span>Bronze Partner</span> with Adobe, a&nbsp;global leader
                    in&nbsp;customer experience management. Our Magento
                    certified experts help companies in&nbsp;both B2B and B2C
                    segments build technology that empowers ecommerce growth.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about_stats">
          <Container>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <Row>
                <Col lg="3" md="6">
                  <div className="stats_box">
                    <i class="fa fa-certificate  mb-4"></i>
                    <h5>Years Experience</h5>
                    <h1>
                      {counterOn && (
                        <CountUp start={1} end={2} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </h1>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="stats_box">
                    <i class="fa fa-users-cog  mb-4"></i>
                    <h5>Team Members</h5>
                    <h1>
                      {counterOn && (
                        <CountUp start={1} end={5} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </h1>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="stats_box">
                    <i class="fa fa-users  mb-4"></i>
                    <h5>Satisfied Clients</h5>
                    <h1>
                      {counterOn && (
                        <CountUp start={1} end={10} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </h1>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="stats_box">
                    <i class="fa fa-check  mb-4"></i>
                    <h5>Projects Done</h5>
                    <h1>
                      {counterOn && (
                        <CountUp start={1} end={10} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </h1>
                  </div>
                </Col>
              </Row>
            </ScrollTrigger>
          </Container>
        </section>
        <Team />
        <section className="partern-box section-padding">
          <Container>
            <div style={{ marginBottom: "30px" }}>
              <h2>Our Partners</h2>
              <div className="partern_box">
                <div className="partern-item ">
                  <img
                    alt=""
                    nitro-lazy-src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-80.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="Njg4Ojgy-1"
                    src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-80.svg"
                  />
                </div>
                <div className="partern-item ">
                  <img
                    alt=""
                    nitro-lazy-src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-78.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NjkxOjgy-1"
                    src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-78.svg"
                  />
                </div>
                <div className="partern-item ">
                  <img
                    alt=""
                    nitro-lazy-src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-79.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="Njk0Ojgy-1"
                    src="https://cdn-cahge.nitrocdn.com/mAPkqokVpTrmAtoawHbGRdGNnCYBNdZh/assets/images/optimized/rev-9d63d56/wp-content/uploads/2022/11/image-79.svg"
                  ></img>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Aboutpage;

import React, { useState } from "react";
import "./styles/CounterStyled.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Couter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="counter__area section-padding">
      <Container>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Row>
            <Col lg="3" md="6">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">
                    {counterOn && (
                      <CountUp start={1} end={2} duration={2} delay={0} />
                    )}
                  </span>
                  <span>+</span>
                </h2>
                <h3>Years Experience</h3>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">
                    {counterOn && (
                      <CountUp start={1} end={5} duration={2} delay={1} />
                    )}
                  </span>
                  <span>+</span>
                </h2>
                <h3>Team Members</h3>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">
                    {counterOn && (
                      <CountUp start={1} end={10} duration={2} delay={2} />
                    )}
                  </span>
                  <span>+</span>
                </h2>
                <h3>Satisfied Clients</h3>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">
                    {counterOn && (
                      <CountUp start={1} end={10} duration={2} delay={3} />
                    )}
                  </span>
                  <span>+</span>
                </h2>
                <h3>Projects Done</h3>
              </div>
            </Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </section>
  );
};

export default Couter;

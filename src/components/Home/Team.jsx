import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./styles/TeamStyled.css";

const Team = () => {
  return (
    <section className="team__area section-padding">
      <Container>
        <Row>
          <Col lg="12">
            <div className="section-title">
              <h6>Team Member</h6>
              <h2>Our Team</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="3" mg="6">
            <div className="team-box">
              <div className="team-image">
                <img
                  src="https://cutesolution.com/html/techvio/assets/img/team/team-1.jpg"
                  alt=""
                />
                <div className="team-social-icon">
                  <a href="/">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ava Farrington</h3>
                <span>Founder, ceo</span>
              </div>
            </div>
          </Col>
          <Col lg="3" mg="6">
            <div className="team-box">
              <div className="team-image">
                <img
                  src="https://cutesolution.com/html/techvio/assets/img/team/team-1.jpg"
                  alt=""
                />
                <div className="team-social-icon">
                  <a href="/">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ava Farrington</h3>
                <span>Founder, ceo</span>
              </div>
            </div>
          </Col>
          <Col lg="3" mg="6">
            <div className="team-box">
              <div className="team-image">
                <img
                  src="https://cutesolution.com/html/techvio/assets/img/team/team-1.jpg"
                  alt=""
                />
                <div className="team-social-icon">
                  <a href="/">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ava Farrington</h3>
                <span>Founder, ceo</span>
              </div>
            </div>
          </Col>
          <Col lg="3" mg="6">
            <div className="team-box">
              <div className="team-image">
                <img
                  src="https://cutesolution.com/html/techvio/assets/img/team/team-1.jpg"
                  alt=""
                />
                <div className="team-social-icon">
                  <a href="/">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="/">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ava Farrington</h3>
                <span>Founder, ceo</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;

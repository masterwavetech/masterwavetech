import React from "react";
import "./styles/ContactStyled.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section className="contact__area">
      <Container>
        <Row>
          <Col lg="8" md="12" style={{ margin: "auto" }}>
            <div className="contact-content">
              <h4>Want to work with us?</h4>
              <h2>We're here to bring your ideas to life</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud consectetur voluptatem
                accusantium doloremque adipiscing elit.
              </p>
              <div className="contact_btn">
                <a
                  className="default-btn"
                  href="tel:08152966334"
                  style={{ marginRight: "20px" }}
                >
                  Call Now
                </a>
                <Link to="/contact" className="default-btn-one">
                  Contact us
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

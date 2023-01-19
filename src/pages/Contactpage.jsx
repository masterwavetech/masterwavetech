import React, { useState } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { PageTitle } from "../components";
import { useLocation } from "react-router-dom";
import "./styles/CntactStyled.css";
import { Container, Row, Col } from "reactstrap";
import { faqs } from "../api/data";

const Contactpage = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1];
  const [selected, setSelected] = useState(null);

  const toggleBox = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <Helmet title={"Contact Us"}>
        <PageTitle title={title} />
        <section className="contant-area ">
          <Container>
            <Row>
              <Col lg="6" md="6" className="center-content">
                <div class="section-title">
                  <h6>Contact Information</h6>
                  <h2>Find Us</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="6">
                <div className="contact-info">
                  <div className="icon-box">
                    <i className="ri-map-2-line"></i>
                  </div>
                  <div className="text-box">
                    <h3>Our Location</h3>
                    <p>No Physical Location</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="contact-info">
                  <div className="icon-box">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div className="text-box">
                    <h3>give us a call</h3>
                    <p>
                      <a href="tel:+2348152966334">+2348152966334 </a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="contact-info">
                  <div className="icon-box">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="text-box">
                    <h3>Help Desk</h3>
                    <p>
                      <a href="mailto:contact@masterwave.tech">
                        contact@masterwave.tech
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="contact-form section-padding">
          <Container>
            <Row>
              <Col lg="6" md="6" className="center-content">
                <div class="section-title">
                  <h6>WE'RE 24/7</h6>
                  <h2> Let's work together</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="10" className="center-content">
                <form className="contact__form">
                  <Row>
                    <Col lg="6" md="6">
                      <div className="form__group">
                        <input
                          text="name"
                          placeholder="Your Name"
                          name=""
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="form__group">
                        <input
                          text="name"
                          placeholder="Your Email"
                          name=""
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" md="6">
                      <div className="form__group">
                        <input
                          text="name"
                          placeholder="Your Phone"
                          name=""
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="form__group">
                        <input
                          text="name"
                          placeholder="Your Submit"
                          name=""
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <div className="form__group">
                        <textarea
                          name="message"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="submit__btn">
                    <button type="submit" className="default-btn">
                      Send message
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-padding faqs-section">
          <Container>
            <Row>
              <Col lg="6" md="6" className="center-content">
                <div class="section-title">
                  <h2>Frequently Asked Questions</h2>
                </div>
              </Col>
            </Row>

            <Row>
              {faqs.map((item, i) => (
                <Col lg="6" md="6" onClick={() => toggleBox(i)}>
                  <div className="accordion">
                    <div className="item">
                      <div className="title">
                        <h3>What is your process for design?</h3>
                        <span>
                          {selected === i ? (
                            <i className="ri-arrow-up-s-line"></i>
                          ) : (
                            <i className="ri-arrow-down-s-line"></i>
                          )}
                        </span>
                      </div>
                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua enim ad minim veniam, nostrud
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Contactpage;

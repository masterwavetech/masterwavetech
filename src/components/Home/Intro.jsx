import React from "react";
import Slider from "react-slick";
import "./styles/IntroStyled.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { sliderItems } from "../../api/data";

function SamplePrevArrow({ onClick }) {
  return (
    <div className="slider__prev" onClick={onClick}>
      <i className="ri-arrow-left-s-line"></i>
    </div>
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <div className="slider__next" onClick={onClick}>
      <i className="ri-arrow-right-s-line"></i>
    </div>
  );
}

const Intro = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="intro__wraper">
      <Slider {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="intro_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Container>
                  <Row>
                    <Col lg="8" className="wrapper">
                      <div className="caption">
                        <h1 data-aos="fade-up" data-aos-duration="1500">
                          {item.title}
                        </h1>

                        <p
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1800"
                        >
                          {item.desc}
                        </p>
                        <div
                          className="slider_btn"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="2000"
                        >
                          <Link to="/about" className="default-btn-one">
                            {item.action1}
                          </Link>
                          <Link to="/contact" className="default-btn">
                            {item.action2}
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Intro;

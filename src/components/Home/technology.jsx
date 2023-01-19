import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./styles/CounterStyled.css";
import { Stack } from "../../api/data";
import Slider from "react-slick";

const Technology = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="stacK__area section-padding">
      <Container>
        <Row>
          <Col lg="12">
            <div className="section-title">
              <h6>Languages we use</h6>
              <h2>Technologies stack we work with</h2>
            </div>
          </Col>
        </Row>
        <Slider {...settings}>
          {Stack.map((item, index) => (
            <div className="stack__wrapper" key={index}>
              <div className="stack_img">
                <img src={item.img} alt={item.title} title={item.title} />
              </div>

              <h4>{item.title}</h4>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Technology;

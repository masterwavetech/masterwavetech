import React, { useState, useEffect } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { PageTitle } from "../components";
import { useLocation } from "react-router-dom";
import "./styles/ProjectStyled.css";
import { Container, Row, Col } from "reactstrap";
import { product } from "../api/data";
const Projectpage = () => {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState("all");
  const location = useLocation();
  const title = location.pathname.split("/")[1];
  useEffect(() => {
    if (tab === "all") {
      setProducts(product);
    } else {
      const filterProduct = product.filter((item) => item.category === tab);
      setProducts(filterProduct);
    }
  }, [tab]);
  console.log(products);
  return (
    <>
      <Helmet title={"Blog"}>
        <PageTitle title={title} />
        <section className="project__section section-padding">
          <Container>
            <Row>
              <Col lg="12" md="12">
                <div className="section-title">
                  <h6>Recent Works</h6>
                  <h2>Our Successful Projects</h2>
                  <p>
                    Our team is working hard to design your thoughts into
                    reality. Get down there and have a look at our designs!!
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="collection-box">
                  <ul className="collection-tab">
                    <li
                      className={tab === "all" ? "active" : ""}
                      onClick={() => setTab("all")}
                    >
                      All
                    </li>
                    <li
                      className={tab === "development" ? "active" : ""}
                      onClick={() => setTab("development")}
                    >
                      Web development
                    </li>
                    <li
                      className={tab === "mangento" ? "active" : ""}
                      onClick={() => setTab("mangento")}
                    >
                      Mangento
                    </li>
                    <li
                      className={tab === "shopify" ? "active" : ""}
                      onClick={() => setTab("shopify")}
                    >
                      Shopify
                    </li>
                    <li
                      className={tab === "woocommerce" ? "active" : ""}
                      onClick={() => setTab("woocommerce")}
                    >
                      woocommerce
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              {products.map((item) => (
                <Col lg="6">
                  <div className="portfolio_item">
                    <div className="project_image-thum">
                      <img
                        src={item.image}
                        title={item.title}
                        alt={item.title}
                      />
                    </div>
                    <ul className="tag-list">
                      {item.tag.map((tag) => (
                        <li>{tag}</li>
                      ))}
                    </ul>
                    <h3>{item.title}</h3>
                    <div className="button_wrapper">
                      <div className="button-action">
                        <p>View</p>
                        <p>
                          <strong>source code</strong>
                        </p>
                      </div>
                      <div className="button-action">
                        <p>Completion Time:</p>
                        <p>
                          <strong>6 Weeks</strong>
                        </p>
                      </div>
                      <div className="button-action">
                        <p>View</p>
                        <p>
                          <strong>Full Details</strong>
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

export default Projectpage;

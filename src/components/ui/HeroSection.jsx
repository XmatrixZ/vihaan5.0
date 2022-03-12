import React from "react";
import "./heroSection.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import heroImg from "../../assets/images/hero.jpg"
import heroImg1 from "../../assets/images/PIC_1.png"

const HeroSection = () => {

  return (
    <section
      className="hero__section"
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                The next Generation
                <span>Marketplace</span> 
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet enim corporis laborum consectetur facilis iusto
                perspiciatis laboriosam id nihil voluptas!
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

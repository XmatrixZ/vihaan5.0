import React from "react";
import Typewriter from "typewriter-effect";
import "./heroSection.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import heroImg from "../../assets/images/hero.jpg"
import heroImg1 from "../../assets/images/PIC_1.png"


const TypeWriter_Content = [
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  "Eveniet enim corporis laborum consectetur facilis iustoperspiciatis laboriosam id nihil voluptas!",
];

const handleDragStart = (e) => e.preventDefault();

const items = [
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div className="hero_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684951/hello_zqdvq4.png"
      width="170"
      height="150"
      onDragStart={handleDragStart}
      style={{ padding: "1rem" }}
    />
  </div>,

  <div className="hero_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684951/hello_3_k0jrmu.png"
      width="170"
      height="150"
      onDragStart={handleDragStart}
      style={{ padding: "1rem" }}
    />
  </div>,

  <div className="hero_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684951/hello_1_enm4yb.png"
      width="170"
      height="150"
      onDragStart={handleDragStart}
      style={{ padding: "1rem" }}
    />
  </div>,
];



const HeroSection = () => {

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                <Typewriter
                  options={{
                    strings: TypeWriter_Content,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet enim corporis laborum consectetur facilis iusto
                perspiciatis laboriosam id nihil voluptas!
              </p> */}
              {/* <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div> */}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <AliceCarousel
                mouseTracking
                items={items}
                controlsStrategy="alternate"
                autoPlay="true"
                infinite="true"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

import React from 'react'
import "./brands.css"
import Typewriter from "typewriter-effect";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";



const handleDragStart = (e) => e.preventDefault();


const items = [
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div className="brand_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684950/158da5b9-8bb1-4578-bdbc-929a2592e917_uqm4ck.jpg"
      width="200"
      height="150"
      onDragStart={handleDragStart}
      style={{ margin: "1rem" }}
    />
  </div>,

  <div className="brand_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684950/0dd3973b-0dd1-4e97-b2e6-908f5fb78250_xn32ge.jpg"
      width="200"
      height="150"
      onDragStart={handleDragStart}
      style={{ margin: "1rem" }}
    />
  </div>,

  <div className="brand_images">
    <img
      src="https://res.cloudinary.com/japnoor/image/upload/v1649684951/aa7faaa9-3bd4-4c3d-8c48-353325267830_ees0ay.jpg"
      width="200"
      height="150"
      onDragStart={handleDragStart}
      style={{ margin: "1rem" }}
    />
  </div>,
];

const brands = () => {
  return (
    <div className="brand-container" id="Brands">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="BrandColorContent d-flex align-items-center justify-content-center">
              <h1>Brands</h1>
            </div>
            <div className="BrandColorContent d-flex align-items-center justify-content-center">
              <h2>
                <Typewriter
                  options={{
                    strings:
                      "Brands associated with echio are the ones that prefer purpose over profit.",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" xs="2" className="mb-5">
            <div className="float-right align-items-center text-white BrandContent BrandColorContent1">
              Echio brings only those brands that MATTER,that create value in
              society.we believe that brands are not about product, marketing or
              website it is about the experience it sells to the customer.
            </div>
          </Col>
          <Col lg="6" className="mb-6">
            <AliceCarousel
              mouseTracking
              items={items}
              controlsStrategy="alternate"
              autoPlay="true"
              infinite="true"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mb-5">
            <div
              class="col-lg-3 col-6 text-center "
              style={{
                color: "#105459",
                marginLeft: "6rem",
                marginTop: "-10rem",
                marginBottom: "5rem",
                fontSize: "2.5rem",
              }}
            >
              <span data-toggle="counter-up">6</span>+<p> Influencers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default brands
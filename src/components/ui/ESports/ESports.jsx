import React from "react";
import Typewriter from "typewriter-effect";
import "./ESports.css";
import { Container, Row, Col } from "reactstrap";

const ESports = () => (
  <Container id="ESports" className="ESport">
    <div class="video-background">
      <div class="video-foreground">
        <iframe
          src="https://www.youtube.com/embed/JxPCa6s2fSE"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <Row>
      <Col lg="12" className="mb-5">
        <div className="live__auction__top ESportsColorContent d-flex align-items-center justify-content-center">
          <h1>ESports</h1>
        </div>
        <div className="ESportsQuote d-flex align-items-center justify-content-center">
          <h2>
            <Typewriter
              options={{
                strings:
                  "True influencers are those that post on social media to impact not to impress",
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className="mb-5">
        <div className="align-items-center d-flex justify-content-center text-white ESportsContent">
          Echio's way of marketing is all about creating belief and trust in the
          customer. Quality influencers are the ones that people trust the most
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="4" className="mb-6 d-flex align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/japnoor/image/upload/v1649685177/WhatsApp_Image_2021-07-04_at_9.22.36_PM_exjpxq.jpg"
          width="300"
          height="300"
          alt=""
        />
      </Col>
      <Col lg="4" className="mb-6">
        <img
          src="https://res.cloudinary.com/japnoor/image/upload/v1649685176/thumb_a_njatb7.jpg"
          width="300"
          height="300"
          alt=""
        />
      </Col>
      <Col lg="4" className="mb-6">
        <img
          src="https://res.cloudinary.com/japnoor/image/upload/v1649685171/WhatsApp_Image_2021-05-24_at_1.38.53_PM_newni4.jpg"
          width="300"
          height="300"
          alt=""
        />
      </Col>
    </Row>
    <Row>
      <Col lg="6" className="mb-5">
        <div
          class="col-lg-3 col-6 text-center "
          style={{
            color: "#e8fdff",
            marginLeft: "22rem",
            marginTop: "4rem",
            fontSize: "2.5rem",
          }}
        >
          <span data-toggle="counter-up">25000</span>+
          <p>Players connected with us</p>
        </div>
      </Col>
      <Col lg="6" className="mb-5">
        <div
          class="col-lg-3 col-6 text-center "
          style={{
            color: "#e8fdff",
            marginLeft: "10rem",
            marginTop: "4rem",
            fontSize: "2.5rem",
          }}
        >
          <span data-toggle="counter-up">20</span>+
          <p>Tournaments Partnered with us</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ESports;

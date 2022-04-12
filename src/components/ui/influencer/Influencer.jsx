import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Influencer.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const Influencers = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="Influencers" id="Influencers">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-center">
              <h1>Influencer</h1>
            </div>
            <div className="live__auction__top d-flex align-items-center justify-content-center">
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
          <Col lg="5" className="mb-6">
            <img
              src="https://res.cloudinary.com/japnoor/image/upload/v1649684951/Untitled_design_12_iltyu1.png"
              width="500"
              height="500"
              alt=""
            />
          </Col>
          <Col lg="7" xs="2" className="mb-5">
            <div className="float-right align-items-center text-white InfluencerContent">
              True influencers are those that post on social media to impact not
              to impress
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mb-5">
            <div
              class="col-lg-3 col-6 text-center "
              style={{
                color: "#e8fdff",
                marginLeft: "46rem",
                marginTop: "-10rem",
                marginBottom: "5rem",
                fontSize: "2.5rem",
              }}
            >
              <span data-toggle="counter-up">2000</span>+<p> Influencers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Influencers;

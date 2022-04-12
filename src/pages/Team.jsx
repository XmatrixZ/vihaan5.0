import React from "react";
import "./Team.css";
import { Row, Col } from "reactstrap";
import Japnoor from "../assets/images/Japnoor.jpeg"
import Kshitij from "../assets/images/Kshitij.png";
import Abhinav from "../assets/images/Abhinav.jpeg";
import Shivansh from "../assets/images/Shivansh.jpg"
function About() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1>Our Team</h1>
          </div>
        </div>
        <div className="row">
          <div className="team-items">
            <Row>
              <div className="item" style={{ marginLeft: "30rem" }}>
                <img
                  src="https://res.cloudinary.com/japnoor/image/upload/v1649700549/2_f1ikbq.png"
                  alt="team"
                />
                <div className="inner">
                  <div className="info">
                    <h5>Himanshu Singh</h5>
                    <p>Founder & CEO</p>
                    <div className="social-links">
                      <a href="n">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className="item" style={{ marginLeft: "4rem" }}>
                <img
                  src="https://res.cloudinary.com/japnoor/image/upload/v1649700549/3_hkgrah.png"
                  alt="team"
                />
                <div className="inner">
                  <div className="info">
                    <h5>Jayant</h5>
                    <p>Advisor</p>
                    <div className="social-links">
                      <a href="n">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{ marginLeft: "4rem" }}>
                <img
                  src="https://res.cloudinary.com/japnoor/image/upload/v1649700549/1_z8qy6c.png"
                  alt="team"
                />
                <div className="inner">
                  <div className="info">
                    <h5>Ivanshu Sharma</h5>
                    <p>Financial Advisor</p>
                    <div className="social-links">
                      <a href="n">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href=",">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a href="m">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{ marginLeft: "4rem" }}>
                <img
                  src="https://res.cloudinary.com/japnoor/image/upload/v1649700549/4_le6sla.png"
                  alt="team"
                />
                <div className="inner">
                  <div className="info">
                    <h5>S. Mannat</h5>
                    <p>Advisor</p>
                    <div className="social-links">
                      <a href="n">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="n">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href=",">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a href="m">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

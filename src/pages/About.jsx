import React from "react";
import "./About.css";
import Japnoor from "../assets/images/Japnoor.jpeg"
import Kshitij from "../assets/images/Kshitij.png";
import Abhinav from "../assets/images/Abhinav.jpeg";
import Shivansh from "../assets/images/Shivansh.jpg"
import teamImg from "../assets/images/img-07.jpg"
function About() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h1>Our Team</h1>
            <p>TRIO_KNIGHTS</p>
          </div>
        </div>
        <div className="row">
          <div className="team-items">
            <div className="item">
              <img src={Abhinav} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>Aditya Kumar</h5>
                  <p>WEB AND BLOCKCHAIN DEVELOPER</p>
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
            <div className="item">
              <img src={Japnoor} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>AMANDEEP SINGH</h5>
                  <p>MERN STACK WEB DEVELOPER AND KOTLIN APP DEVELOPER</p>
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
            <div className="item">
              <img src={Kshitij} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>KSHITIJ SINGH</h5>
                  <p>GRAPHIC DESIGNER AND FRONT-END WEB DEVELOPER</p>
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
            <div className="item">
              <img src={Shivansh} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>KSHITIJ SINGH</h5>
                  <p>GRAPHIC DESIGNER AND FRONT-END WEB DEVELOPER</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

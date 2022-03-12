import React from "react";
import "./About.css";
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
            <p>Rasenshuriken 2.0</p>
          </div>
        </div>
        <div className="row">
          <div className="team-items">
            <div className="item">
              <img src={Kshitij.png} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>Kshitij Singh</h5>
                  <p>Full Stack Developer and a UI/UX Designer</p>
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
              <img src={Abhinav.jpeg} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>Abhinav Aggarwal</h5>
                  <p>Full Stack Developer and ML Expert</p>
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
              <img src={Japnoor.jpeg} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>JAPNOOR SINGH</h5>
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
              <img src={Shivansh.jpg} alt="team" />
              <div className="inner">
                <div className="info">
                  <h5>Shivansh Dhondiyal</h5>
                  <p>Full Stack Developer</p>
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

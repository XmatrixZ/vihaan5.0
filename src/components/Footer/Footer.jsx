import React from "react";
import "./Footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const MY_ACCOUNT = [
  {
    display: "Abhinav Aggarwal",
    url: "/https://www.linkedin.com/in/abhinav-aggrawal-aa97b6201/",
  },
  {
    display: "Kshitij Singh",
    url: "https://www.linkedin.com/in/kshitij-singh-29b23b201/",
  },
  {
    display: "Shivansh Dhondiyal",
    url: "https://www.linkedin.com/in/shivansh-dhondiyal-427aaa204/",
  },
  {
    display: "Japnoor Singh",
    url: "https://www.linkedin.com/in/japnoor-singh-85393a146/",
  },
];


const COMPANY = [
  {
    display: "About",
    url: "/home",
  },
  {
    display: "Influencer",
    url: "#Influencers",
  },
  {
    display: "Brands",
    url: "#Brands",
  },
  {
    display: "E-Sports",
    url: "#ESports",
  },
  {
    display: "Contact Us",
    url: "#ContactUS",
  },
  {
    display: "Team",
    url: "/team",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                NFT's
              </h2>
              <p>
                Our platform is tailor-made for novice creators who don’t get
                opportunities in this competitive world. Similarly, our platform
                makes it easy for companies, especially, the upcoming startups
                to hire innovators at a cheaper rate. This model solves both the
                major problems which we have discussed before. The video
                demonstrations/ image of the project can be included as an NFT
                by the creators/ developers.
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Team</h5>
            <ListGroup className="list__group">
              {MY_ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item__footer">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item__footer">
                  <HashLink to={item.url}>{item.display}</HashLink>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="social__links d-flex gap-3 align-items-center">
              <span>
                <Link to="#">
                  <i
                    className="ri-facebook-line"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i
                    className="ri-instagram-line"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-telegram-line" style={{ fontSize: "3rem" }}>
                  </i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-discord-line" style={{ fontSize: "3rem" }}>
                  </i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="12" className="mt-4 text-center">
            <p className="copyright">Made with ❤️ by DTU STUDENTS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

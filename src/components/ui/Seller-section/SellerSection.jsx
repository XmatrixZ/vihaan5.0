import React,{useEffect} from 'react'
import {Container, Row, Col} from "reactstrap"
import "./sellerSection.css"
import { SELLER__DATA} from "../../../assets/data/data";

import ava01 from "../../../assets/images/ava-01.png"
import AOS from "aos";
import "aos/dist/aos.css";

const SellerSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="SellerSectionBg">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>
          {SELLER__DATA.map((item) => (
            <Col
              lg="2"
              md="3"
              sm="4"
              xs="6"
              key={item.id}
              className="mb-4"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-in-sine"
            >
              <div className="single__seller-card align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>
                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid} ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SellerSection
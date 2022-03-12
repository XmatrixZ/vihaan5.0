import React,{useEffect} from 'react'
import {Container, Row, Col} from "reactstrap"
import {Link} from "react-router-dom"
import NftCard from "../Nft-card/NftCard"
import {NFT__DATA} from "../../../assets/data/data"

import "./liveAuction.css"

import AOS from "aos";
import "aos/dist/aos.css";


const LiveAuction = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <section className="LiveAuctionBg">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>
          {NFT__DATA.slice(0.4).map((item) => (
            <Col
              lg="3"
              key={item.id}
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-in-sine"
            >
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LiveAuction
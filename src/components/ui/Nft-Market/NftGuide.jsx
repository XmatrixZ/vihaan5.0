import React from "react";
import "../heroSection.css";
import { Container, Row, Col } from "reactstrap";

import heroImg1 from "../../../assets/images/PIC_3.png";

const NftGuide = () => {
  return (
    <section className="hero__section" style={{height:"120vh"}}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                <span>NFT GUIDE</span>
              </h2>
              <p>
                The term "non-fungible token" (NFT) refers to a token that is
                not replaceable. An NFT is a digital asset that links ownership
                to unique physical or digital assets such as works of art, real
                estate, music, or films. NFTs can be considered modern-day
                collectibles. They're bought and sold online, and represent
                digital proof of ownership of any given item. NFTs are securely
                recorded on a blockchain - the same technology behind
                cryptocurrencies - which ensures the asset is one-of-a-kind. The
                technology can also make it difficult to alter or counterfeit
                NFTs.
              </p>
              <p>
                The distinct construction of each NFT has the potential for
                several use cases. For example, they are an ideal vehicle to
                digitally represent physical assets like real estate and
                artwork. Because they are based on blockchains, NFTs can also
                work to remove intermediaries and connect artists with audiences
                or for identity management. NFTs can remove intermediaries,
                simplify transactions, and create new markets.
              </p>
              <p>
                Non-fungible tokens are an evolution of the relatively simple
                concept of cryptocurrencies. Modern finance systems consist of
                sophisticated trading and loan systems for different asset
                types, ranging from real estate to lending contracts to artwork.
                By enabling digital representations of physical assets, NFTs are
                a step forward in the reinvention of this infrastructure.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img
                src={heroImg1}
                alt=""
                style={{ width: "32rem", height: "28rem" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NftGuide;

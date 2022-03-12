import React from 'react'
import "./NftMarket.css";
import styled from "styled-components";
import { NewsLetter } from "./NewsLetter";
import NftGuide from "./NftGuide";

const AppContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 4rem;
  margin-left: 6rem;
`;

const NftMarket = () => {
  return (
    <div>
      <NftGuide />
      <AppContainer>
        <NewsLetter />
      </AppContainer>
    </div>
  );
};

export default NftMarket;
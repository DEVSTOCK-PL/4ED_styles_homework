import React from 'react';
import styled from "styled-components";
import Card from "./Card.jsx";

const data = [
  {id: 1, logo: '/brandLogos/Stripe.svg'},
  {id: 2, logo: '/brandLogos/Spotify.svg'},
  {id: 3, logo: '/brandLogos/Tesla.svg'},
  {id: 4, logo: '/brandLogos/Twitch.svg'},
  {id: 5, logo: '/brandLogos/Intel.svg'},
  {id: 6, logo: '/brandLogos/Shell.svg'},
  {id: 7, logo: '/brandLogos/Netflix.svg'},
  {id: 8, logo: '/brandLogos/Nestle.svg'},
  {id: 9, logo: '/brandLogos/Fedex.svg'},
  {id: 10, logo: '/brandLogos/Disney.svg'},
  {id: 11, logo: '/brandLogos/BMW.svg'},
  {id: 11, logo: '/brandLogos/Coca-Cola.svg'},
]


const CostumersLogosWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: #1F2A37;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
  //@media (max-width: 640px) {
  //  padding: 32px 16px;
  //
  //}
`

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 64px;
  padding: 96px 0;

  @media (max-width: 640px) {
    width: 100%;
    gap: 32px;
    padding: 32px 16px;
  }
`
const HeadingWrapper = styled.div`
  width: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    width: 100%;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 125%;
    color: #FFF;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    width: 100%;

    font-size: 20px;
    font-weight: 300;
    line-height: 150%;
    color: #9CA3AF;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #3F83F8;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`
const LogosContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 32px;

  @media (max-width: 640px) {
    row-gap: 20px;
  }
`

const CostumersLogos = () => {


  return (
    <CostumersLogosWrapper>
      <Container>
        <HeadingWrapper>
          <h1>Donors, Partners & Sponsors</h1>
          <p>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term
            value.</p>
          <span>Become a sponsor <img src='/arrow-narrow-right-blue.svg'/></span>
        </HeadingWrapper>
        <LogosContainer>
          {data.map(item => <Card logo={item.logo}/>)}

        </LogosContainer>
      </Container>
    </CostumersLogosWrapper>
  );
};

export default CostumersLogos;
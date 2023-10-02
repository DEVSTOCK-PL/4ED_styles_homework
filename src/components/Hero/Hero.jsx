import React from 'react';
import styled from "styled-components";
import {Button} from "../UI/index.js";
import {Disney, Fedex, Intel, Visa} from "../assets/brandLogos/index.js";
import icon from '../assets/video-camera.svg'
import picture1 from '../assets/carousel1.jpeg'


const HeroWrapper = styled.section`
  display: flex;
  //flex-direction: column;
  //align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 96px 16px;
  gap: 20px;


  @media (max-width: 1024px) {
    padding: 32px 16px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 32px 16px;
    gap: 16px;
  }
`

const LeftContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 640px) {
    gap: 16px;
    max-width: 100%;

  }
`

const BrandLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;


  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 640px) {
    height: 32px;
  }
`
const Buttons = styled.div`
  display: flex;
  //padding: 32px 0;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;

  }
`
const Sponsors = styled.div`
  border-top: 1px solid #374151;

  p {
    color: #6B7280;
    padding: 32px 0 12px 0;

    @media (max-width: 640px) {
      display: none;
    }
  }

  @media (max-width: 640px) {
    border-top: none;
  }
`

const TitleDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;


  h1 {
    color: #FFF;
    //font-size: 48px;
    font-size: clamp(20px, 3vw, 48px);
    font-weight: 800;

    @media (max-width: 640px) {
      font-size: 30px;

    }
  }

  p {
    color: #9CA3AF;
    //font-size: 20px;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
`
const Carousel = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    max-width: 100%;
  }

  img {
    border-radius: 8px;
    max-width: 100%;
    max-height: 360px;
  }


`


const Hero = () => {


  return (
    <HeroWrapper>
      <LeftContainer>
        <TitleDesc>
          <h1>Making earth cooler for
            people, nature, climate</h1>
          <p>Protecting the planet and its natural resources for future generations, by reducing pollution, promoting
            sustainability, and conserving energy and resources.</p>
        </TitleDesc>
        <Buttons>
          <Button>Donate now</Button>
          <Button variant='alternative'><img src={icon}/>Learn more</Button>
        </Buttons>

        <Sponsors>
          <p>Sponsors:</p>
          <BrandLogosContainer>
            <img alt='Intel icon' src={Intel}/>
            <img alt='Fedex icon' src={Fedex}/>
            <img alt='Visa icon' src={Visa}/>
            <img alt='Disney icon' src={Disney}/>
          </BrandLogosContainer>
        </Sponsors>
      </LeftContainer>

      <Carousel>
        <img src={picture1}/>
      </Carousel>


    </HeroWrapper>
  );
};

export default Hero;
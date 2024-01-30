import React from 'react'
import styled from 'styled-components'

import Button from '../Reusable/Button'
import VideoCamera from '../assets/icon/video-camera.svg'
import { intel, fedex, visa, disney } from '../assets/brandlogo/brandlogo'
import carousel from '../assets/image/Carousel.png'

const Hero = styled.div`
background-color: #111928;
width: 100%;
height: 626px;
padding: 96px, 0px, 96px, 0px;
display: flex;
position: relative;
align-items: center;
justify-content: center;
font-family: 'Inter', sans-serif;

@media (max-width: 640px) {
    width: 375px;
    height: 638px;
}
`
const Container = styled.div`
width: 1280px;
height: 434px;
justify-content: space-between;
display: flex;
align-items: center;

@media (max-width: 640px) {
    width: 375px;
    height: 638px;
    flex-direction: column;
    padding: 32px, 16px, 32px, 16px;
    gap: 16px;
    justify-content: space-around;
}
`

const LeftContent = styled.div`
max-width: 50%;
display: flex;
flex-direction: column;
gap: 32px;

@media (max-width: 640px) {
    width: 343px;
    height: 382px;
    align-items: center;
    gap: 16px;
}
`
const TitleDesc = styled.div`
width: 576px;
display: flex;
flex-direction: column;
gap: 20px;

@media (max-width: 640px) {
    width: 343px;
    gap: 1px;
}

h1 {
  color: #FFF;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 30px;
}
}
p {
    color: #9CA3AF;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
    }
}
`
const Buttons = styled.div`
gap: 16px;
display: flex;

@media (max-width: 640px) {
    width: 343px;
    flex-direction: column;
}

Button {
    @media (max-width: 640px) {
        width: 100%;
    }
}

`

const Sponsors = styled.div`
width: 576px;
height: 116px;
padding: 32px, 0px, 0px, 0px;
gap: 12px;
color: #6B7280;

@media (max-width: 640px) {
    width: 343px;
    height: 32px;
}

p {
    @media (max-width: 640px) {
        display: none;
      }
    }
}
`
const SponsorLogos = styled.div`
width: 576px;
height: 48px;
display: flex;
justify-content: space-between;

@media (max-width: 640px) {
    width: 343px;
    height: 32px;
    gap: 16px;
}

img {
    width: 87px;
    height: 48px;

    @media (max-width: 640px) {
        width: 358px;
        height: 32px;
    }
}
`
const Carousel = styled.div`
width: 576px;
height: 360px;

@media (max-width: 640px) {
    width: 343px;
    height: 176px;
}

img {
    @media (max-width: 640px) {
        width: 343px;
        height: 176px;
    }
}
`

function Heroo() {
    return(
        <Hero>
            <Container>
                <LeftContent>
                    <TitleDesc>
                    <h1>Making earth cooler for
            people, nature, climate</h1>
            <p>Protecting the planet and its natural resources for future generations, by reducing pollution, promoting
            sustainability, and conserving energy and resources.</p>
                    </TitleDesc>
                    <Buttons>
                        <Button description='Donate now' width='182px'></Button>
                        <Button description='Learn more' width='182px' backgroundColor='#1F2A37' color='#9CA3AF' iconLeft={VideoCamera}></Button>
                    </Buttons>
                <Sponsors><p>Sponsors:</p>
                    <SponsorLogos>
                        <img src={intel} alt="Logo Intel" />
                        <img src={fedex} alt="Logo Fedex" />
                        <img src={visa} alt="Logo Visa" />
                        <img src={disney} alt="Logo Disney" />
                    </SponsorLogos>
                </Sponsors>
                </LeftContent>
                <Carousel>
                    <img src={carousel} alt="" />
                </Carousel>
            </Container>
        </Hero>
    )
}

export default Heroo
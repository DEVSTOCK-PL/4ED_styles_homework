import React from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'
import VideoCamera from '../assets/icon/video-camera.svg'
import Intel from '../assets/brandlogo/Intel.png'
import Fedex from '../assets/brandlogo/Fedex.png'
import Visa from '../assets/brandlogo/Visa.png'
import Disney from '../assets/brandlogo/Disney.png'
import carousel from '../assets/image/Carousel.png'



const Hero = styled.div`
background-color: #111928;
width: 1440px;
height: 626px;
padding: 96px, 0px, 96px, 0px;
display: flex;
position: relative;
align-items: center;
justify-content: center;
font-family: 'Inter', sans-serif;
`
const Container = styled.div`
width: 1280px;
height: 434px;
justify-content: space-between;
display: flex;
align-items: center;
`

const LeftContent = styled.div`
max-width: 50%;
display: flex;
flex-direction: column;
gap: 32px;
`
const TitleDesc = styled.div`
display: flex;
flex-direction: column;
gap: 20px;


h1 {
  color: #FFF;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
}
p {
    color: #9CA3AF;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
`
const Buttons = styled.div`
// width: 380px;
// height: 48px;
gap: 16px;
display: flex;
`

const Sponsors = styled.div`
width: 576px;
height: 116px;
padding: 32px, 0px, 0px, 0px;
gap: 12px;
color: #6B7280;
`
const SponsorLogos = styled.div`
width: 576px;
height: 48px;
display: flex;
justify-content: space-between;

img {
    width: 87px;
    height: 48px;
}
`
const Carousel = styled.div`
width: 576px;
height: 360px;
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
                <Sponsors>Sponsors:
                    <SponsorLogos>
                        <img src={Intel} alt="Logo Intel" />
                        <img src={Fedex} alt="Logo Fedex" />
                        <img src={Visa} alt="Logo Visa" />
                        <img src={Disney} alt="Logo Disney" />
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
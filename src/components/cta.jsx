import React from 'react'
import styled from 'styled-components'

import Button from '../Reusable/Button'
import { mockup1, mockup2, mockup3 } from '../assets/image/image'
import arrowwhite from '../assets/icon/ArrowWhite.svg'

const CTA = styled.div`
background-color: #111928;
width: 100%;
height: 1444px;
border: 1px, 0px, 1px, 0px;
padding: 0px, 0px, 96px, 0px;
gap: 10px;
display: flex;
justify-content: center;
font-family: 'Inter', sans-serif;

@media (max-width: 640px) {
    width: 375px;
    height: 1229px;
    padding: 0px, 16px, 32px, 16px;
    gap: 32px;
}
`
const Container = styled.div`
width: 1280px;
height: 1348px;
gap: 64px;
display: flex;
flex-direction: column;

@media (max-width: 640px) {
    width: 375px;
    height: 1229px;
    padding: 0px, 16px, 32px, 16px;
    gap: 32px;
    align-items: center;
}
`
const Row = styled.div`
width: 1280px;
height: 406px;
gap: 80px;
display: flex;
align-items: center;

@media (max-width: 640px) {
    width: 343px;
    height: 365px;
    align-items: start;
}
`
const Mockup = styled.div`
width: 540px;
height: 406px;
radius: 8px;

@media (max-width: 640px) {
    display: none;
}
`
const RightContent = styled.div`
width: 640px;
height: 260px;
gap: 24px;

h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    margin-top: 6px;

    @media (max-width: 640px) {
        font-size: 30px;
        line-height: 37.5px;
    }
  }
p {
    color: #9CA3AF;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
}
`
const Buttons = styled.div`
width: 284px;
height: 41px;
gap: 16px;
display: flex;
`




const supportText = "Flowbite helps you connect with friends, family, and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups."

function CTA1() {
    return(
        <CTA>
            <Container>
                <Row>
                    <Mockup><img src={mockup1} alt="mockup1" /></Mockup>
                    <RightContent>
                        <h1>Flowbite Green is a climate change non-profit organization.</h1>
                        <p>{supportText}</p>
                        <Buttons><Button description='Get involved' width='152px' iconRight={arrowwhite}/> <Button description='Learn more' width='116px' backgroundColor='#1F2A37' color='#9CA3AF' border='1px solid #4B5563'/></Buttons>
                    </RightContent>
                </Row>
                <Row>
                    <RightContent>
                    <h1>Protect our earth against climate change and pollution.</h1>
                        <p>{supportText}</p>
                        <Buttons><Button description='View all activities' width='184px' iconRight={arrowwhite}/></Buttons>
                    </RightContent>
                    <Mockup><img src={mockup2} alt="mockup2" /></Mockup>
                </Row>
                <Row>
                    <Mockup><img src={mockup3} alt="mockup3" /></Mockup>
                    <RightContent>
                    <h1>Together we can restore our earth against climate change.</h1>
                        <p>{supportText}</p>
                        <Buttons><Button description='Read more' width='140px' iconRight={arrowwhite}/></Buttons>
                    </RightContent>
                </Row>
            </Container>
        </CTA>
    )
}

export default CTA1
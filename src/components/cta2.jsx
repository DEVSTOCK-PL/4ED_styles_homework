import React from'react'

import styled from 'styled-components'
import Button from '../Reusable/Button'
import mockup1 from '../assets/image/Mockup1.png'
import mockup4 from "../assets/image/Mockup4.png"
import arrowblue from '../assets/icon/ArrowBlue.svg'
import ProgressBar from '../Reusable/progressbar'
import share from '../assets/icon/Share.svg'

const CTA = styled.div`
background-color: #111928;
font-family: 'Inter', sans-serif;
width: 1440px;
height: 997px;
gap: 10px; 
padding: 96px, 0px, 96px, 0px;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 1280px;
height: 805px;
gap: 32px;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
`
const Heading = styled.div`
width: 676px;
height: 121px;
gap: 16px;
text-align: center;

h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    color: #fff;
    margin: 0 auto;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: #9CA3AF;
  }

`
const Cards = styled.div`
width: 1280px;
height: 593px;
gap; 48px;
display: flex;
justify-content: space-between;
`
const Card = styled.div`
width: 616px;
height: 593px;
border-radius: 8px;
border: 1px solid #374151;
background-color: #1F2A37;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// gap: 16px;

h1 {
    width: 552px;
    height: 23px;
    font-weight: 700; 
    font-size: 18px;
    line-height: 22.5px;
    color: #fff
    
}

p {
    width: 552px;
    height: 72px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9CA3AF
   
}
`
const IMG = styled.div`
width: 552px;
    height: 288px;

    img {
    width: 100%;
    height: 100%;
    radius: 8px;
}
`

const Progress = styled.div`
width: 552px;
height: 41px;
gap: 4px;
`
const Buttons = styled.div`
width: 347px;
height: 41px;
gap: 16px;
display: flex;
position: relative;
left: -100px;
`

const Fundarising = styled.div`
width: 253px;
height: 27px;
gap: 6px;

span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #3F83F8;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
}
`

const CardText = "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."

function CTA2() {
    return(
        <CTA>
            <Container>
                <Heading>
                    <h1>Fundarising events</h1>
                    <p>Flowbite helps you connect with friends, famuly and communities of people who share your interests.</p>
                </Heading>
                <Cards>
                    <Card>
                    <IMG><img src={mockup1} alt="mockup1" /></IMG>
                    <Progress><ProgressBar donors="2756" colected="376856" goal="400000" /></Progress>
                    <h1>Thank you for supporting in planting trees work.</h1>
                    <p>{CardText}</p>
                    <Buttons>
                        <Button description='Donate now'  width='121px' height='41px'/>
                        <Button description='Share this Fundraiser' color='#9CA3AF' backgroundColor='#1F2A37' width='210px' height='41px' border='1px solid #4B5563' iconLeft={share}/>
                    </Buttons>
                    </Card>
                    <Card>
                    <IMG><img src={mockup4} alt="mockup4" /></IMG>
                    <Progress><ProgressBar donors="568" colected="75856" goal="150000" /></Progress>
                    <h1>Thank you for supporting our lifesaving work.</h1>
                    <p>{CardText}</p>
                    <Buttons>
                        <Button description='Donate now'  width='121px' height='41px'/>
                        <Button description='Share this Fundraiser' color='#9CA3AF' backgroundColor='#1F2A37' width='210px' height='41px' border='1px solid #4B5563' iconLeft={share}/>
                    </Buttons>
                    </Card>
                </Cards>
                <Fundarising>
                <span>View all fundarising events <img src={arrowblue}/></span>
                </Fundarising>
            </Container>
        </CTA>
    )
}

export default CTA2
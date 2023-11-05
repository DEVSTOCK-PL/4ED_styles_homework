import React from 'react'

import styled from 'styled-components'

const SocialProof = styled.div`
background-color: #111928;
width: 1440px;
height: 213px;
padding: 0px, 0px, 96px, 0px;
border: 1px, 0px, 1px, 0px;
gap: 64px;
display: flex;
// position: relative;
align-items: start;
justify-content: center;
font-family: 'Inter', sans-serif;
`
const Container = styled.div`
width: 1280px;
height: 117px;
gap: 48px;
// background-color: white;
display: flex;
justify-content: center;
`
const Row = styled.div`
width: 1024px;
display: flex;
justify-content: center;
padding: 24px 16px;
background-color: #1F2A37;
border: 1px solid #374151;
border-radius: 8px;
line-height: 0;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  div:not(:last-of-type) {
    border-right: 1px solid #374151;
  }

`
const Header = styled.h1`
font-size: 36px;
font-weight: 800;
color: #FFF;
`
const Paragraph = styled.p`
font-size: 16px;
font-weight: 400;
color: #9CA3AF;
`


function Social() {
    return(
        <SocialProof>
            <Container>
                <Row>
                <div><Header>104M</Header><Paragraph>Trees planted</Paragraph></div>
                <div><Header>20k+</Header><Paragraph>Partners & Donors</Paragraph></div>
                <div><Header>90M</Header><Paragraph>Tonnes of Carbon Stored</Paragraph></div>
                <div><Header>50+</Header><Paragraph>People-Powered Projects</Paragraph></div>
                </Row>
            </Container>
        </SocialProof>
    )
}

export default Social
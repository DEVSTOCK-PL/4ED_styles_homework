import React from 'react'
import styled from 'styled-components'

const SocialProof = styled.div`
background-color: #111928;
width: 100%;
height: 213px;
padding: 0px, 0px, 96px, 0px;
border: 1px, 0px, 1px, 0px;
gap: 64px;
display: flex;
align-items: start;
justify-content: center;
font-family: 'Inter', sans-serif;

@media (max-width: 640px) {
    width: 375px;
    height: 360px;
    padding: 0px, 16px, 32px, 16px;
}
`
const Container = styled.div`
width: 1280px;
height: 117px;
gap: 48px;
display: flex;
justify-content: center;

@media (max-width: 640px) {
    width: 343px;
    height: 328px;
    gap: 32px;
}
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

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;

    div:not(:last-of-type) {
      border-right: none
    }
  }
`
const Header = styled.h1`
font-size: 36px;
font-weight: 800;
color: #FFF;

@media (max-width: 640px) {
    font-size: 30px;
}
`
const P = styled.p`
font-size: 16px;
font-weight: 400;
color: #9CA3AF;
`

const socialProofData = [
  { number: '104M', text: 'Trees planted' },
  { number: '20k+', text: 'Partners & Donors' },
  { number: '90M', text: 'Tonnes of Carbon Stored' },
  { number: '50+', text: 'People-Powered Projects' },
];

function Social() {
  return (
    <SocialProof>
      <Container>
        <Row>
          {socialProofData.map((item, index) => (
            <div key={index}>
              <Header>{item.number}</Header>
              <P>{item.text}</P>
            </div>
          ))}
        </Row>
      </Container>
    </SocialProof>
  );
}

export default Social;
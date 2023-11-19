import React from 'react'
import styled from 'styled-components'

import Flowbite from '../assets/image/Logo.png'
import Facebook from '../assets/icon/facebook.svg'
import Dribble from '../assets/icon/dribbble.svg'
import Twitter from '../assets/icon/twitter.svg'
import Git from '../assets/icon/github.svg'

const Foot = styled.div`
background-color: #1F2A37;
font-family: 'Inter', sans-serif;
width: 1440px;
height: 569px;
padding: 96px, 0px, 64px, 0px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 640px) {
    width: 375px;
    height: 1485px;
}
`
const Container = styled.div`
width: 1280px;
height: 409px;
gap: 64px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 640px) {
    width: 375px;
    padding: 32px, 16px;
}
`
const NavLinks = styled.div`
width: 1280px;
height: 221px;
display: flex;
justify-content: space-between;

@media (max-width: 640px) {
    width: 343px;
    height: 1073px;
    flex-direction: column;
    gap: 16px;
}
`
const Column = styled.div`
width: 176px;
height: 221px;
display: flex;
flex-direction: column;
justify-content: space-around;

h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #fff
}
`
const Links = styled.div`
width: 176px;
height: 184px;
gap: 16px;
display: flex;
flex-direction: column;
`
const Link = styled.a`
width: 176px;
height: 24px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration: none;
color: #9CA3AF;
`
const SocialLinks = styled.div`
width: 384px;
height: 124px;
gap: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

span {
    font-weight: 400; 
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #9CA3AF;
}
`
const Logo = styled.div`
width: 144px;
height: 36px;
gap: 12px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #fff;
`
const Socials = styled.div`
width: 156px;
height: 24px;
gap: 20px;
display: flex;
justify-content: space-between;
`


function Footer() {
    return(
        <Foot>
            <Container>
                <NavLinks>
                    <Column height='221px'>
                     <h1>COMPANY</h1>
                     <Links>
                      <Link>About</Link>
                      <Link>Premium</Link>
                      <Link>Blog</Link>
                      <Link>Affiliate Program</Link>
                      <Link>Get Coupon</Link>
                     </Links>
                    </Column>
                    <Column>
                     <h1>HELP AND SUPPORT</h1>
                     <Links>
                      <Link>Contact Us</Link>
                      <Link>Knowledge Center</Link>
                      <Link>Premium Support</Link>
                      <Link>SponsorShips</Link>
                     </Links>
                    </Column>
                    <Column>
                    <h1>LEARNING</h1>
                     <Links>
                      <Link>Learn Hub</Link>
                      <Link>Manuals</Link>
                      <Link>Tutorials</Link>
                      <Link>Communities</Link>
                     </Links>
                    </Column>
                    <Column>
                    <h1>RESOURCES</h1>
                     <Links>
                      <Link>Third-Party Tools</Link>
                      <Link>Illustrations</Link>
                      <Link>Themesberg</Link>
                      <Link>Bluehost</Link>
                      <Link>Stock Photos</Link>
                     </Links>
                    </Column>
                    <Column>
                    <h1>LEGAL</h1>
                     <Links>
                      <Link>Privacy Policy</Link>
                      <Link>Terms & Conditions</Link>
                      <Link>EULA</Link>
                     </Links>
                    </Column>
                </NavLinks>
                <SocialLinks>
                    <Logo><img src={Flowbite} alt="Flowbite logo" /><p>Flowbite</p></Logo>
                    <span>2022 Flowbite, Inc. All rights reserved.</span>
                    <Socials>
                        <img src={Git} alt="Github" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Dribble} alt="Dribble" />
                        <img src={Facebook} alt="Facebook" />
                    </Socials>
                </SocialLinks>
            </Container>
        </Foot>
    )
}

export default Footer
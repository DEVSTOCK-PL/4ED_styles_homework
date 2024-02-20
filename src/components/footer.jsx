import React from 'react'
import styled from 'styled-components'

import Flowbite from '../assets/image/Logo.png'
import { facebook, dribbble, twitter, github } from '../assets/icon'

const Foot = styled.div`
background-color: #1F2A37;
font-family: 'Inter', sans-serif;
width: 100%;
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
const navigationData = [
    {
        category: 'COMPANY',
        links: ['About', 'Premium', 'Blog', 'Affiliate Program', 'Get Coupon']
    },
    {
        category: 'HELP AND SUPPORT',
        links: ['Contact Us', 'Knowledge Center', 'Premium Support', 'SponsorShips']
    },
    {
        category: 'LEARNING',
        links: ['Learn Hub', 'Manuals', 'Tutorials', 'Communities']
    },
    {
        category: 'RESOURCES',
        links: ['Third-Party Tools', 'Illustrations', 'Themesberg', 'Bluehost', 'Stock Photos']
    },
    {
        category: 'LEGAL',
        links: ['Privacy Policy', 'Terms & Conditions', 'EULA']
    },
]

function Footer() {
    return(
        <Foot>
            <Container>
                <NavLinks>
                    {navigationData.map((category, index) => (
                        <Column key={index}>
                            <h1>{category.category}</h1>
                            <Links>
                              {category.links.map((link, linkIndex) => (
                                <Link key={linkIndex}>{link}</Link>
                              ))}
                            </Links>
                        </Column>
                    ))}
                </NavLinks>
                <SocialLinks>
                    <Logo><img src={Flowbite} alt="Flowbite logo" /><p>Flowbite</p></Logo>
                    <span>2022 Flowbite, Inc. All rights reserved.</span>
                    <Socials>
                        <img src={github} alt="Github" />
                        <img src={twitter} alt="Twitter" />
                        <img src={dribbble} alt="Dribble" />
                        <img src={facebook} alt="Facebook" />
                    </Socials>
                </SocialLinks>
            </Container>
        </Foot>
    )
}

export default Footer
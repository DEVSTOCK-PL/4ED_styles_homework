import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/image/Logo.png'
import Button from '../Reusable/Button'

const Container = styled.div`
background-color: #111928;
display: flex;
position: relative;
width: 100%;
height: 65px;
padding: 24px, 0px, 0px, 0px;
align-items: end;
justify-content: center;
font-family: 'Inter', sans-serif;

@media (max-width: 640px) {
    width: 375px;
    height: 60px;
}
`

const Nav = styled.div`
width: 1280px;
height: 41px;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

@media (max-width: 640px) {
    width: 343px;
    height: 36px;
}
`

const CompanyLogo = styled.div`
align-items: center;
display: flex;
gap: 12px;
font-weight: 600;
font-size: 24px;
line-height: 36px;
`


const NavLinks = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 876px;
height: 24px;
gap: 32px;
font-weight: 500;
font-size: 16px;
line-height: 24px;

    @media (max-width: 640px) {
		display: none;
	}
`

const LinkStyled = styled(Link)`
text-decoration: none; 
color: #fff;
`

const LogIn = styled.div`
display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`

function Navbar() {
    return(
        <Container>
            <Nav>
                <CompanyLogo>
                    <img width="32px" height="32px" src={Logo} alt="Logo firmy" />Logo
                </CompanyLogo>
                <NavLinks>
                    <LinkStyled to="/home">Home</LinkStyled>
					<LinkStyled to="/news">News</LinkStyled>
                    <LinkStyled to="/events">Events</LinkStyled>
                    <LinkStyled to="/contact">Contact</LinkStyled>
                </NavLinks>
                <LogIn>Log In<Button description="Get Started"></Button></LogIn>
            </Nav>
        </Container>
    )
}


export default Navbar


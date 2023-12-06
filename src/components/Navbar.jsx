import { Link } from 'react-router-dom'
import styled from "styled-components";
import { BlueButtons, Selector } from '../generalComponents/indexGeneralComponents.js';
import { LogoNavbarFooter } from '../image/indexImage';
import { breakpoints } from './breakpoints';

const NavbarComponents = styled.div`
width: 100%;
min-width: 1440px;
height: 65px;
background: #111928;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;

@media screen and (max-width: ${breakpoints.m}){
    margin: 0 32px;
}
` 
const NavbarContainer = styled.div`
width: 88.88%;
max-width: 1280px;
height: 41px;
gap: 64px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


@media screen and (max-width: ${breakpoints.xs}) {
    justify-content: space-between;
    width: 70%;
    min-width: 375px;
    height: 36px;
    display: flex;
}
`
const PlaceCompanyLogo = styled.div`
width: 102px;
height: 36px;
gap: 12px;
display: flex;
flex-direction: row;
`
const LogoImage = styled.svg`
width:32px;
height:32px;
`
const CompanyName = styled.div`
width:58px;
height:36px;
font-weight:600;
font-size: 24px;
line-height: 36px;
color: #fff;
`
const NavLinks = styled.div`
width: 100%;
height: 24px;
gap: 32px;
display: flex;

@media screen and (max-width: ${breakpoints.xs}) {
    display: none;
}
`
const LinkName = styled.button`
height: ${(props)=>props.height||"24px"};
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #fff;
background: #111928;
display: flex;
align-items: center;
justify-content: center;
width: ${(props)=>props.width};
`
const LinkNameCTA = styled(LinkName)`
min-width: 45px;
line-height: 21px;
font-size: 14px;
height: 21px;
`

const NavCTA = styled.div`
width: 100%;
min-width: 174px;
height: 41px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;

@media screen and (max-width: ${breakpoints.xs}) {
    display: none;
}
`
const DivSelector = styled.div`
display: none;
@media screen and (max-width: ${breakpoints.xs}) {
    display: block;
    width: 177px;
}
`

const Navbar = () => {

    return (            
        <NavbarComponents>
            <NavbarContainer>
                <PlaceCompanyLogo>
                    <Link to="/">    
                        <LogoImage><image xlinkHref={LogoNavbarFooter} alt="Logo"/></LogoImage>
                    </Link>
                    <Link to="/">    
                        <CompanyName>Flowbite</CompanyName>
                    </Link>
                </PlaceCompanyLogo>
                <NavLinks>
                    <Link to="/">
                        <LinkName width="73px" >Home</LinkName>
                    </Link>
                    <Link to="/news" >
                        <LinkName>NEWS</LinkName>
                    </Link>  
                    <Link to="/events" >
                        <LinkName>EVENTS</LinkName>
                    </Link>    
                    <Link to="/contact" >
                        <LinkName>CONTACT</LinkName>
                    </Link>  
                    <Link to="/fun" >
                        <LinkName>Rick&Morty</LinkName>
                    </Link>
               </NavLinks>
                <NavCTA>
                    <Link to="/login">
                        <LinkNameCTA>Log In</LinkNameCTA>
                    </Link>
                    <Link to="/get-started">
                        <BlueButtons description="Get started" lineHeight="21px"></BlueButtons>
                    </Link>               
                </NavCTA>
                <DivSelector>
                    <Selector />
                </DivSelector>
            </NavbarContainer>
        </NavbarComponents>
    )
}
export default Navbar
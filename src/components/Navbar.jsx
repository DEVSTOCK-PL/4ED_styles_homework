import BlueButton from "../generalComponents/BlueButtons";
import styled from "styled-components";
import LogoNavbarFooter from "../image/LogoNavbarFooter.svg"
import Selector from "../generalComponents/Selector";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CompanyLink from "../subpages/CompanyLink";
import MarketPlaceLink from "../subpages/MarketplaceLink";
import FeaturesLink from "../subpages/FeaturesLink";
import TeamLink from "../subpages/TeamLink";
import ContactLink from "../subpages/ContactLink";
import NotFoud from "../subpages/NotFound";

const NavbarComponents = styled.div`
width: 100%;
height: 65px;
background: #111928;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
${'' /* @media(max-width:375px){
    max-width: 375px;
} */}
` 
const NavbarContainer = styled.div`
width: 88.88%;
height: 41px;
gap: 64px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media(max-width: 375px) {
    ${'' /* width: 343px; */}
    width: 88.88%;
    height: 36px;
    display: flex;
    justify-content: space-between;
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
font-family:Inter;
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
flex-wrap: wrap;
@media (max-width: 375px) {
    display: none;
}
`
const LinkName = styled.button`
height: ${(props)=>props.height||"24px"};
font-family: Inter;
font-weight: 500;
font-size: ${(props)=>props.fontSize||'16px'};
line-height: ${(props)=>props.lineHeight||"24px"};
color: #fff;
background: #111928;
display: flex;
align-items: center;
justify-content: center;
width: ${(props)=>props.width};
`
const NavCTA = styled.div`
width: 100%;
height: 41px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
@media (max-width: 375px){
    display: none;
}
`

const DivSelector = styled.div`
display: none;
@media (max-width: 375px){
    display: block;
    width: 177px;
}
`

const Navbar = () => {
    return (
    <BrowserRouter>
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
                    <Link to="/company"><LinkName width="73px">Company</LinkName></Link>
                    <Link to="/marketplace"><LinkName width="95px">Marketplace</LinkName></Link>
                    <Link to="/features"><LinkName width="67px">Features</LinkName></Link>
                    <Link to="/team"><LinkName width="42px">Team</LinkName></Link>
                    <Link to='/contact'><LinkName width="62px">Contact</LinkName></Link>
                </NavLinks>
                <NavCTA>
                    <LinkName width="15%" lineHeight="21px" fontSize="14px" height="21px">Log In</LinkName>
                    <BlueButton description="Get started" lineHeight="21px"></BlueButton>
                </NavCTA>
                <DivSelector>
                    <Selector />
                </DivSelector>
            </NavbarContainer>
        </NavbarComponents>

        <Routes>
            <Route path="/contact" element={<ContactLink />} />  
            <Route path="/company" element={<CompanyLink />} />  
            <Route path="/marketplace" element={<MarketPlaceLink />} />            
            <Route path="/features" element={<FeaturesLink />} />
            <Route path="/team" element={<TeamLink />} />  
            <Route path="*" element={<NotFoud />} />        
        </Routes>
    </BrowserRouter>
    )
}
export default Navbar
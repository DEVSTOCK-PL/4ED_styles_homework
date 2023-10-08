import BlueButton from "../generalComponents/BlueButtons";
import styled from "styled-components";
import LogoNavbarFooter from "../image/LogoNavbarFooter.svg"

const NavbarComponents = styled.div`
width: 1440px;
height: 65px;
padding: 24px, 0px,0px,0px;
background: #111928;
display: flex;
justify-content: center;
align-items: flex-end;

`
const NavbarContainer = styled.div`
width: 1280px;
height: 41px;
gap: 64px;
display: flex;
justify-content: center;
align-items: center;
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
width: 876px;
height: 24px;
gap: 32px;
display: flex;
`
const Link = styled.button`
height: ${(props)=>props.heigh||"24px"};
font-family: Inter;
font-weight: 500;
font-size: ${(props)=>props.fontSize||'16px'};
line-height: ${(props)=>props.lineHeight||"24px"};
align-items: center;
color: #fff;
background: #111928;
display: flex;
align-items: center;
width: ${(props)=>props.width};
`
const NavCTA = styled.div`
width: 174px;
height: 41px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`



const Navbar = () => {
    return (
        <NavbarComponents>
            <NavbarContainer>
                <PlaceCompanyLogo>
                    <LogoImage><image xlinkHref={LogoNavbarFooter} alt="Logo"/></LogoImage>
                    <CompanyName>Logo</CompanyName>
                </PlaceCompanyLogo>
                <NavLinks>
                    <Link width="73px">Company</Link>
                    <Link width="95px">Marketplace</Link>
                    <Link width="67px">Features</Link>
                    <Link width="42px">Team</Link>
                    <Link width="62px">Contact</Link>
                </NavLinks>
                <NavCTA>
                    <Link width="56px" lineHeight="21px" fontSize="14px" heigh="21px">Log In</Link>
                    <BlueButton description="Get started" lineHeight="21px"></BlueButton>
                </NavCTA>
            </NavbarContainer>
        </NavbarComponents>
    )
}
export default Navbar
import styled from "styled-components";
import LogoNavbarFooter from "../../image/LogoNavbarFooter.svg"
import BlueButton from "../../generalComponents/BlueButtons";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";


const NavbarRegisterStyled = styled.div`
width: 1440px;
height: 65px;
display: flex;
background: #111928;
flex-direction: row;
justify-content: center;
align-items: flex-end;
`
const NavbarLine = styled.div`
width: 1280px;
height: 41px;
gap: 64px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const NavbarLogo = styled.div`
width: 102px;
height: 36px;
gap: 12px;
display: flex;
flex-direction: row;
`
const LogoImage = styled.svg`
width: 32px;
height: 32px`
const CompanyName = styled.div`
width:58px;
height:36px;
font-family:Inter;
font-weight:600;
font-size: 24px;
line-height: 36px;
color: #fff;
`
const NavLinksNavbar = styled.div`
width: 876px;
height: 32px;
color: #fff;
display: flex;
align-items: center;
gap: 32px;

`
const LinkName = styled.button`
height: 24px;
font-family: Inter;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #fff;
background: #111928;
display: ${(props)=>props.display||"flex"};
align-items: center;
justify-content: center;
width: ${(props) => props.width};
`
const CTANAvbar = styled.div`
width: 174px;
height: 41px;
display: flex;
`



const NavbarRegister = () => {
    return (
            <NavbarRegisterStyled>
                <NavbarLine>
                    <NavbarLogo>
                        <LogoImage><image xlinkHref={LogoNavbarFooter} alt="Logo"/></LogoImage>
                        <CompanyName>Logo</CompanyName>
                    </NavbarLogo>
                    <NavLinksNavbar>
                        <Link ><LinkName width="49px">HOME</LinkName></Link>
                        <Link ><LinkName width="49px">NEWS</LinkName></Link>
                        <Link ><LinkName width="67px" display="none">Features</LinkName></Link>
                        <Link ><LinkName width="64px" >EVENTS</LinkName></Link>
                        <Link ><LinkName width="78px">CONTACT</LinkName></Link>
                    </NavLinksNavbar>
                    <CTANAvbar>
                        <Link></Link>
                        <Link to='/'><BlueButton description="Get started" lineHeight="21px" /></Link>
                    </CTANAvbar>
                </NavbarLine>
            </NavbarRegisterStyled>

    )
}
export default NavbarRegister
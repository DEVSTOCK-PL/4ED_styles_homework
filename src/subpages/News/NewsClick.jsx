import styled from "styled-components";
import NavbarRegister from "../Register/NavbarRegister";
import CtaOne from "../../components/CTA_1";
import Footer from "../../components/Footer";

const NewsClickStyled = styled.div`
width: 1440px;
height: 2078.34px;
display: flex;
flex-direction: column;
`

const NewsClick = () => {
    return (
        <NewsClickStyled>
            <NavbarRegister />
            <CtaOne />
            <Footer />
        </NewsClickStyled>
    )
}
export default NewsClick
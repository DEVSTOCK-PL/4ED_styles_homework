import React from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import styled from "styled-components";
import NavbarRegister from "../Register/NavbarRegister";

const ContactClickStyled = styled.div`
width: 1440px;
height: 2366px;
display: flex;
flex-direction: column;
`

const ContactClick = () => {
    return (
        <ContactClickStyled>
            <NavbarRegister />
            <Contact />
            <Footer />
        </ContactClickStyled>
    )
}
export default ContactClick
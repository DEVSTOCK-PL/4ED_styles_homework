import React from "react";

import styled from "styled-components";
import NavbarRegister from "./NavbarRegister";
import ContactRegister from "./ContactRegister";
import Footer from "../../components/Footer";

const RegisterContainer = styled.div`
max-width: 1440px;
height: 1420px;
background-color: #111928;
display: flex;
flex-direction: column;
align-items: center;
`

const Register = () => {
    return(
        <RegisterContainer>
            <NavbarRegister/>
            <ContactRegister />
            <Footer />
        </RegisterContainer>
    )
}
export default Register
import React from "react";

import styled from "styled-components";

const LoginStyled = styled.div`
width: 100%;
min-width: 1440px;
height: 1194px;
background-color: #111928;
display: flex;
flex-direction: column;
`
const ContactContainer = styled.div`
width: 100%;
min-width: 1440px;
height: 560px;
background-color: #111928;
display: flex;
align-items: center;
justify-content: center;
`
const InsideContainer = styled.div`
width: 1280px;
height: 368px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Heading = styled.div`
width: 672px;
height: 45px;
font-family: Inter;
font-weight: 800;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
`
const ContactForm = styled.div`
width: 640px;
height: 259px;
display: flex;
flex-direction: column;
`
const InputForm = styled.div`
width: 640px;
height: 194px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const InputRow = styled.div`
width: 640px;
height: 81px
`
const LabelInput = styled.label`
width: 640px;
height: 21px;
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #fff;
`
const InputLogin = styled.input`
width: 640px;
height: 52px;
background-color: #374151;
border-radius: 8px;
`
const LoginButton = styled.button`
width: 77px;
height: 41px;
background-color: #1C64F2;
color: #FFF;
font-family: Inter;
font-weight: 500;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
`
//     display: flex;
    flex-direction: column;
    // align-self: baseline;

const Login = () => {
    return (
        <LoginStyled>
            <ContactContainer>
                <InsideContainer>
                    <Heading>Zaloguj się</Heading>
                    <ContactForm>
                        <InputForm>
                            <InputRow>
                               <LabelInput>Your email</LabelInput> 
                                <InputLogin type="email" id="email" name="email" placeholder="Email"/>
                            </InputRow>
                            <InputRow>
                                <LabelInput>Password</LabelInput>
                                <InputLogin type="password" id="password" name="password" placeholder="Password" />
                            </InputRow>
                        </InputForm>
                        <LoginButton>Login</LoginButton>
                    </ContactForm>
                </InsideContainer>
            </ContactContainer>
        </LoginStyled>   
    )
}

export default Login

//         <CustomNav onClick={props.scrollToSection}>Więcej informacji o moliwym wsparciu</CustomNav>

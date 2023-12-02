import { useState } from "react";

import styled from "styled-components";

const RegisterStyled = styled.div`
width: 100%;
min-width: 1440px;
height: 786px;
display: flex;
background-color: #111928;
align-items: center;
justify-content: center;
`
const ContainerContactRegister = styled(RegisterStyled)`
width: 100%;
min-width: 1280px;
height: 594px;
flex-direction: column;
`
const Heading = styled.div`
width:100%;
min-width: 672px; 
height: 45px;
display: flex;
justify-content: center;
font-size: 36px;
font-weight:800;
line-height: 45px;
color: #ffffff;
`
const ContactForm = styled.div`
width: 100%;
min-width: 640px;
height: 420px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const InputRow = styled.div`
width: 100%;
max-width: 640px;
height: 81px;
display: flex;
flex-direction: column;
`
const LabelInput = styled.label`
width: 100%;
max-width: 640px;
height: 21px;
font-size: 14px;
font-weight:500;
line-height: 21px;
color: #ffffff;
display: flex;
justify-content: flex-start;
padding: 0 8px;
`
const InputContact = styled.input`
width: 100%;
max-width: 640px;
height: 52px;
display: flex;
border-radius: 8px;
background-color: #374151;
justify-content: center;
align-content: center;
padding: 0 8px;
`
const CreateAccountButton = styled.button`
width: 145px;
height: 41px;
background-color: #1C64F2;
color: #FFF;
font-weight: 500;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
`
const ButtonSector = styled.div`
width: 100%;
max-width: 640px;
height: 52px;
display: flex;
padding: 0 8px;
`

const Register = () => {
    return(
        <RegisterStyled>
            <ContainerContactRegister>
                <Heading>Zarejestruj się</Heading>
                <ContactForm>
                    <InputRow>
                        <LabelInput>Name</LabelInput>
                        <InputContact type="text" id="name" name="name" placeholder="Name"/>
                    </InputRow>
                     <InputRow>
                        <LabelInput>Second Name</LabelInput>
                        <InputContact type="text" id="second name" name="second name" placeholder="Second Name"/>
                    </InputRow>
                     <InputRow>
                        <LabelInput>Email</LabelInput>
                        <InputContact type="email" id="email" name="email" placeholder="Email"/>
                    </InputRow>
                     <InputRow>
                        <LabelInput>Password</LabelInput>
                        <InputContact type="password" id="password" name="password" placeholder="Password"/>
                    </InputRow>
                </ContactForm>
                <ButtonSector>
                    <CreateAccountButton type="submit">Create Account</CreateAccountButton>
                </ButtonSector>
            </ContainerContactRegister>
        </RegisterStyled>
    )
}

export default Register
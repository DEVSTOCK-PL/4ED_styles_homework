import styled from "styled-components";
// import { useState } from "react";

const ContactRegisterStyled = styled.div`
width: 1440px;
height: 786px;
display: flex;
background-color: #111928;
align-items: center;
justify-content: center;
`
const ContainerContactRegister = styled.div`
width: 1280px;
height: 594px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading = styled.div`
width: 672px; 
height: 45px;
display: flex;
justify-content: center;
font-family: Inter;
font-size: 36px;
font-weight:800;
line-height: 45px;
color: #ffffff;
`
const ContactForm = styled.div`
width: 640px;
height: 420px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`
const InputRow = styled.div`
width: 640px;
height: 81px;
display: flex;
flex-direction: column;
`
const LabelInput = styled.label`
width: 640px;
height: 21px;
font-family: Inter;
font-size: 14px;
font-weight:500;
line-height: 21px;
color: #ffffff;
`
const InputContact = styled.input`
width: 640px;
height: 52px;
display: flex;
border-radius: 8px;
background-color: #374151;
justify-content: center;
align-content: center;
`
const CreateAccountButton = styled.button`
width: 145px;
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

const ContactRegister = () => {
  
        
    
    return(
        <ContactRegisterStyled>
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
                <CreateAccountButton type="submit">Create Account</CreateAccountButton>
            </ContainerContactRegister>
        </ContactRegisterStyled>
    )
}

export default ContactRegister
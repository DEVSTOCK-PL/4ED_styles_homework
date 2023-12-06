import React from "react";
import { Link } from 'react-router-dom'

import styled from "styled-components";

const ContactContainer = styled.div`
width: 100%;
min-width: 1440px;
height: 560px;
background-color: #111928;
display: flex;
align-items: center;
justify-content: center;
div {
width: 100%;
min-width: 1280px;
height: 368px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    div {
    width: 100%;
    min-width: 672px;
height: 45px;
font-weight: 800;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
}
    div {
    width: 100%;
    min-width: 640px;
height: 259px;
display: flex;
flex-direction: column; 
}
}
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
display: flex;
`
const LabelInput = styled.label`
width: 640px;
height: 21px;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #fff;
display: flex;
justify-content: flex-start;
`
const InputLogin = styled.input`
width: 640px;
height: 52px;
background-color: #374151;
border-radius: 8px;
padding: 0 8px;
`
const LoginButton = styled.button`
width: 77px;
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

const Login = () => {
    return (
        <ContactContainer>
            <div>
                <div>Zaloguj się</div>
                <div>
                    <InputForm>
                        <InputRow>
                            <LabelInput>Your email</LabelInput>
                            <InputLogin type="email" id="email" name="email" placeholder="Email" />
                        </InputRow>
                        <InputRow>
                            <LabelInput>Password</LabelInput>
                            <InputLogin type="password" id="password" name="password" placeholder="Password" />
                        </InputRow>
                    </InputForm>
                    <Link to="/profile">
                    <LoginButton>Login</LoginButton>
                    </Link>
                </div>
            </div>
        </ContactContainer>
    )
}

export default Login
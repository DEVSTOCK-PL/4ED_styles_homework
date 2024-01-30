import React from 'react'
import styled from 'styled-components'

import Button from '../Reusable/Button'

const Contact = styled.div`
background-color: #111928;
font-family: 'Inter', sans-serif;
width: 100%;
height: 855px;
gap: 10px;
padding: 96px, 0px, 96px, 0px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 640px) {
    width: 375px;
    height: 734px;
    padding: 32px, 16px;
}
`
const Container = styled.div`
width: 1280px;
height: 663px;
gap: 64px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 640px) {
    width: 343px;
    height: 670px;
    gap: 32px;
}
`
const Heading = styled.div`
width: 672px;
height: 121px;
gap: 16px;
text-align: center;

@media (max-width: 640px) {
    width: 343px;
    height: 133px;
    margin-bottom: 20px;
}

h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 45px;
    color: #fff;

    @media (max-width: 640px) {
        font-size: 30px;
    }
}

p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #9CA3AF;

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
    }
}
`
const FormContainer = styled.div`
width: 640px;
height: 478px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (max-width: 640px) {
    width: 343px;
    height: 505px;
    gap: 24px;
}
`
const Row = styled.div`
width: 640px;
height: 194px;
gap: 32px;
display: flex;
flex-direction: column;

@media (max-width: 640px) {
    width: 343px;
    height: 194px;
}
`
const InputField = styled.div`
width: 640px;
height: 81px;
gap: 8px;
display: flex;
flex-direction: column;

@media (max-width: 640px) {
    width: 343px;
    height: 81px;
}
`
const Label = styled.label`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #fff;
`
const Input = styled.input`
width: 640px;
height: 52px;
background-color: #374151;
border: 1px solid #4B5563;
border-radius: 8px;
font-size: 16px;
line-height: 24px;
color: #9CA3AF;
padding-left: 15px;
padding-top: 4px;
box-sizing: border-box;

@media (max-width: 640px) {
    width: 343px;
    height: 81px;
}
	
::placeholder {
	font-size: 16px;
	line-height: 24px;
	color: #9CA3AF;
    font-weight: 400;
}
`
const MessageInput = styled.div`
width: 640px;
height: 195px;
gap: 11px;
`
const Textarea = styled.div`
width: 640px;
height: 195px;
gap: 12px;
display: flex;
flex-direction: column;
`
const InputArea = styled.input`
width: 640px;
height: 162px;
background-color: #374151;
border: 1px solid #4B5563;
border-radius: 8px;
font-size: 16px;
line-height: 24px;
color: #9CA3AF;
padding-left: 15px;
padding-top: 4px;
box-sizing: border-box;

@media (max-width: 640px) {
    width: 343px;
    height: 189px;
}
`


function ContactForm() {
    return(
        <Contact>
            <Container>
                <Heading>
                    <h1>Contact us</h1>
                    <p>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                </Heading>
                <FormContainer>
                    <Row>
                        <InputField>
                        <Label>Your email</Label>
                        <Input type='text' placeholder='name@flowbite.com'></Input>
                        </InputField>
                        <InputField>
                        <Label>Subject</Label>
                        <Input type='text' placeholder='Let us know how we can help you'></Input>
                        </InputField>
                    </Row>
                    <MessageInput>
                        <Textarea>
                            <Label>Your message</Label>
                            <InputArea></InputArea>
                        </Textarea>
                    </MessageInput>
                    <Button description='Send message' width='139px' ></Button>

                </FormContainer>
            </Container>
        </Contact>
    )
}

export default ContactForm
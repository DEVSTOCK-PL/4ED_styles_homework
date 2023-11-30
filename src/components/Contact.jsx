import styled from "styled-components";

import { BlueButtonDifferentColor } from "../generalComponents/indexGeneralComponents.js"
import { breakpoints } from "./breakpoints";

const StyledContact = styled.div`
width: 100%;
min-width: 1440px;
height: 855px;
border: 1px 0px 1px 0px;
background: #111928;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    margin: 0 32px;
    align-items: center;
    padding: 10px 0px;
}
`
const ContactContainer = styled.div` 
width: 100%;
height: 663px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
}
`
const HeadingContact = styled(ContactContainer)`
width: 672px;
height: 121px;

@media screen and (max-width: ${breakpoints.m}) {
width: 100%;
height: auto;
}
`
const FormContact = styled(ContactContainer)`
height: 478px;
justify-content: space-around;
`
const RowInFormContact = styled.div`
width: 640px;
height: 194px;
gap: 32px;
display: flex;
flex-direction: column;
`
const SectorInput = styled.div`
width: 640px;
height: 81px;
display: flex;
flex-direction: column;
align-items: center;
gap: 11px;
`
const SectorMesage = styled(SectorInput)`
height: 195px;
`
const InputStyleText = styled.input`
width: 640px;
height: 52px;
background: #374151;
padding: 0 2.5%; 
box-sizing: border-box;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #9CA3AF;
border: 1px solid #4B5563;
border-radius: 8px;
background: #374151;
display: flex;
justify-content: center;
align-items: center;
`
const ImputMessage = styled(InputStyleText)`
height: 162px;
gap: 10px;
justify-content: start;
`
const LabelInFormContact = styled.label`
width: 640px;
height: 21px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #FFF;
display: flex;
align-items: center;
justify-content: start;

@media screen and (max-width: ${breakpoints.m}) {
    width: 100%;
    height: auto;
    font-size: 14px;
    line-height: 21px;
    height: 21px;
}
`
const ButtonInContactForm = styled.div`
width: 640px;
height: 41px;
display: flex;
align-items: start;
`
const Title = styled.div`
width: 672px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
font-size: 36px;
font-weight: 800;
line-height: 45px;
color: #ffffff;
font-family: Inter;

@media screen and (max-width: ${breakpoints.m}) {
    font-size: 30px;
    line-height: 45px;
    height: 45px;
    padding: 5px;
}
`
const Supporting = styled(Title)`
height: 60px;
color: #9CA3AF;
font-size: 20px;
font-weight: 400;
line-height: 30px;

@media screen and (max-width: ${breakpoints.m}) {
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    padding: 5px;
}
`

const Contact = () => {
    return (
        <StyledContact>
            <ContactContainer>
                <HeadingContact>
                    <Title>Contact us</Title>
                    <Supporting>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</Supporting>
                </HeadingContact>
                <FormContact>
                    <RowInFormContact>
                        <SectorInput>
                            <LabelInFormContact>Your email</LabelInFormContact>
                            <InputStyleText placeholder="name@flowbite.com" />
                        </SectorInput>
                        <SectorInput>
                            <LabelInFormContact>Subject</LabelInFormContact>
                            <InputStyleText placeholder="Let us know how we can help you" />
                        </SectorInput>
                    </RowInFormContact>
                    <SectorMesage>
                        <LabelInFormContact>Your message</LabelInFormContact>
                            <ImputMessage />
                    </SectorMesage>
                    <ButtonInContactForm>
                        <BlueButtonDifferentColor width="139px" description="Send message" />
                    </ButtonInContactForm>
                </FormContact>
            </ContactContainer>
        </StyledContact>
    )
}
export default Contact
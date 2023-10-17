import styled from "styled-components";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import BlueButton from "../generalComponents/BlueButtons";

const StyledContact = styled.div`
width: 1440px;
height: 855px;
border: 1px 0px 1px 0px;
background: #111928;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerContact = styled.div`
width: 1280px;
height: 663px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const HeadingContact = styled.div`
width: 672px;
height: 121px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const FormContact = styled.div`
width: 672px;
height: 478px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const RowInFormContact = styled.div`
width: 640px;
height: 194px;
gap: 32px;
display: flex;
flex-direction: column;
`
const InputMail = styled.div`
width: 640px;
height: 81px;
display: flex;
flex-direction: column;
`

const InputStyleText = styled.input`
width: 608px;
height: 24px;
background: #374151;
font-family: Inter;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #9CA3AF;
border: none;
`
const InputSector = styled.div`
width: 640px;
height: 52px;
border: 1px solid #4B5563;
background: #374151;
display: flex;
justify-content: center;
align-items: center;
`
const InputSubject = styled.div`
width: 640px; 
height: 81px;
`

const InputInFormContact = styled.div`
width: 640px;
height: 195px;
gap: 11px;
display: flex;
flex-direction: column;
align-items: center;
`
const LabelInFormContact = styled.label`
width: 640px;
height: 21px;
font-family: Inter;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #FFF;
display: flex;
align-items: center;
justify-content: start;
`
const InputForInputInFormContact = styled.input`
width: 640px;
height: 162px;
border: 1px solid #4B5563;
gap: 10px;
background: #374151;
display: flex;
justify-content: start;
`
const ButtonInContactForm = styled.div`
width: 640px;
height: 41px;
display: flex;
align-items: start;
`


const Contact = () => {
    return (
        <StyledContact>
            <ContainerContact>
                <HeadingContact>
                    <HeadingText width="672px" height="45px" description="Contact us" display="flex" justifyContent="center" alignItems="center" />
                    <SupportingText width ="672px" height="60px" description="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know." display="flex" flexDirection="row" justifyContent="center" alignItems="center" />
                </HeadingContact>
                <FormContact>
                    <RowInFormContact>
                        <InputMail>
                            <LabelInFormContact>Your email</LabelInFormContact>
                            <InputSector>
                                <InputStyleText placeholder="name@flowbite.com" />
                            </InputSector>
                        </InputMail>
                        <InputSubject>
                            <LabelInFormContact>Subject</LabelInFormContact>
                            <InputSector>
                                <InputStyleText placeholder="Let us know how we can help you" />
                            </InputSector>
                        </InputSubject>
                    </RowInFormContact>
                    <InputInFormContact>
                        <LabelInFormContact>Your message</LabelInFormContact>
                            <InputForInputInFormContact></InputForInputInFormContact>
                    </InputInFormContact>
                    <ButtonInContactForm>
                        <BlueButton width="139px" backgroundColor="#1C64F2" description="Send message" />
                    </ButtonInContactForm>
                </FormContact>
            </ContainerContact>
        </StyledContact>
    )
}
export default Contact
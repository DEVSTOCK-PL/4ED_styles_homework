import styled from "styled-components";

import { VectorButton, CTAOneBottomMockup, CTAOneCenterMockup, CTAOneTopMockup } from "../image/indexImage";

import { breakpoints } from "./breakpoints";

const StyledCtaOne = styled.div`
width: 100%;
min-width: 1440px;
height: 1440.34px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 10px;
background: #111928;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto; 
    margin: 0 32px;
    padding: 25px 0px;
}
@media screen and (max-width: ${breakpoints.xs}) {
        gap: 0px;
}
`
const CtaContainer = styled.div`
width: 100%;
min-width: 1280px;
height: 1348.34px;
gap:64px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto; 
    margin: 0 32px;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: ${breakpoints.xs}) {
        gap: 0px;
}
`
const CtaRow = styled.div`
width: 100%;
min-width: 1280px;
height:406.78px;
gap: 80px;
display: flex;
flex-direction: row;
justify-content: center;
`
const ImageCtaOne = styled.image`
width: 540.46px;
height: 406.78px;
border-radius: 8px;

@media screen and (max-width: ${breakpoints.xs}) {
    display: none;
}
`
const ComplementaryContainer = styled.div`
height: 406.78px;
display: flex;
align-items: center;

@media screen and (min-width: ${breakpoints.s}) and (max-width: ${breakpoints.m}) {
    width: auto;
    height: auto;
}
`
const RightContent = styled.div`
width: 640px;
height: 260px;
gap: 24px;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto; 
    width: 100%;
    display: flex;
    justify-content: center;
}
`
const ButtonsCta = styled.div`
width: 284px;
height:41px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content:space-between;

`
const VectorInButton = styled.svg`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
margin: 8px 0px 0px 0px;
`
const TitleText = styled.div`
width: 640px;
height: 90px;
font-family: Inter;
font-size: 36px;
font-weight: 800;
line-height: 45px;
color: #ffffff;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 30px;
    line-height: 37.5px;
}
`
const PreviewText = styled.div`
width: 640px;
height: 81px;
font-size: 18px;
line-height: 27px;
display: flex;
font-family: Inter;
font-weight: 400;
color: #9CA3AF;
`
const GrayButton = styled.button`
font-size:14px;
width: 116px;
height: 41px;
border-radius: 8px;
border: 1px #4B5563;
background: #1F2A37;
padding: 12px 20px 12px 20px;
font-family: Inter;
font-weight: 500;
color: #9CA3AF;
gap: 8px;
display: flex;
justify-content: center;
align-items: center;
`
const BlueButtons = styled(GrayButton)`
background-color: #1A56DB;
width: ${(props) => props.width};
border: none;
padding: 10px 20px 10px 20px;
color: #FFF;
line-height: 24px;
display: flex;
align-items: center;
height: 41px;
`

const CtaOne = () => {
    return (
        <StyledCtaOne>
            <CtaContainer>
                <CtaRow>
                    <ImageCtaOne><img src={CTAOneTopMockup}/></ImageCtaOne>
                    <ComplementaryContainer>    
                        <RightContent>
                            <TitleText>Flowbite Green is a climate change non-profit organization.</TitleText>
                            <PreviewText>Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</PreviewText>
                            <ButtonsCta>
                                <BlueButtons width="152px" >Get involved<VectorInButton><image xlinkHref={VectorButton} /></VectorInButton></BlueButtons>
                                <GrayButton>Learn more</GrayButton>
                            </ButtonsCta>
                        </RightContent>
                    </ComplementaryContainer>    
                </CtaRow>
                <CtaRow>
                    <ComplementaryContainer>
                        <RightContent>
                            <TitleText>Protect our earth against climate change and pollution.</TitleText>
                            <PreviewText>Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</PreviewText>
                            <BlueButtons width="184px">View all activities<VectorInButton><image xlinkHref={VectorButton} /></VectorInButton></BlueButtons>
                        </RightContent>
                    </ComplementaryContainer>
                    <ImageCtaOne><img src={CTAOneCenterMockup} /></ImageCtaOne>
                </CtaRow>
                <CtaRow>
                    <ImageCtaOne><img src={CTAOneBottomMockup} /></ImageCtaOne>
                    <ComplementaryContainer>
                        <RightContent>
                            <TitleText>Together we can restore our earth against climate change</TitleText>
                            <PreviewText>Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</PreviewText>
                            <BlueButtons width="140px">Read more<VectorInButton><image xlinkHref={VectorButton} /></VectorInButton></BlueButtons>
                        </RightContent>
                    </ComplementaryContainer>
                </CtaRow>
            </CtaContainer>
        </StyledCtaOne>
    )
}
export default CtaOne
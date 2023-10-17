import styled from "styled-components";
import BlueButton from "../generalComponents/BlueButtons";
import GrayButton from "../generalComponents/GrayButton";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import MockupOne from "../image/MockupOne.svg";
import MockupTwo from "../image/MockupTwo.svg";
import MockupThree from "../image/MockupThree.svg";
import VectorButton from "../image/VectorButton.svg"

const StyledCtaOne = styled.div`
width: 1440px;
height: 1440.34px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 10px;
background: #111928;
display: flex;
justify-content: center;
`
const CtaContainer = styled.div`
width: 1280px;
heigh:1348.34px;
gap:64px;
display: flex;
flex-direction: column;
justify-connect: center;
align-items: space-around;
`
const CtaRow = styled.div`
width: 1280px;
height:406.78px;
gap: 80px;
display: flex;
flex-direction: row;
`
const ImageCtaOne = styled.svg`
width: 540.46px;
height: 406.78px;
border-radius: 8px;
`
const ComplementaryContainer = styled.div`
heigh: 406.78px;
display: flex;
align-items: center;
`
const RightContent = styled.div`
width: 640px;
height: 260px;
gap: 24px;
display: flex;
flex-direction: column;
justify-content: center;
`
const ButtonsCta = styled.div`
width: 284px;
heigh:41px;
gap: 16px;
display: flex;
flex-direction: row;
justify-content:space-between;
`
const VectorInButton = styled.svg`
width: 20px;
heigh: 20px;
`

const CtaOne = ({ description }) => {
    return (
        <StyledCtaOne>
            <CtaContainer>
                <CtaRow>
                    <ImageCtaOne><image xlinkHref={MockupOne}/></ImageCtaOne>
                    <ComplementaryContainer>    
                        <RightContent>
                            <HeadingText width="640px" height="90px" description="Flowbite Green is a climate change non-profit organization."/>
                            <SupportingText width="640px" height="81px" fontSize="18px" lineHeight="27px" description="Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups." />
                            <ButtonsCta>
                                <BlueButton width="152px" description="Get involved"><VectorInButton><image xlinkHref={VectorButton} /></VectorInButton></BlueButton>
                                <GrayButton width="116px" height="41px" description="Learn more"></GrayButton>
                            </ButtonsCta>
                        </RightContent>
                    </ComplementaryContainer>    
                </CtaRow>
                <CtaRow>
                    <ComplementaryContainer>
                        <RightContent>
                            <HeadingText width="640px" height="90px" description="Protect our earth against climate change and pollution."></HeadingText>
                            <SupportingText width="640px" height="81px" lineHeight="27px" fontSize="18px" description="Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups."></SupportingText>
                            <BlueButton width="184px" description="View all activities"></BlueButton>
                        </RightContent>
                    </ComplementaryContainer>
                    <ImageCtaOne><image xlinkHref={MockupTwo} /></ImageCtaOne>
                </CtaRow>
                <CtaRow>
                    <ImageCtaOne><image xlinkHref={MockupThree} /></ImageCtaOne>
                    <ComplementaryContainer>
                        <RightContent>
                            <HeadingText width="640px" height="90px" description="Together we can restore our earth against climate change"></HeadingText>
                            <SupportingText width="640px" height="81px" fontSize="18px" lineHeight="27px" description="Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups."></SupportingText>
                            <BlueButton width="140px" fontSize="14px" lineHeight="21px" description="Read more"></BlueButton>
                        </RightContent>
                    </ComplementaryContainer>
                </CtaRow>
            </CtaContainer>
        </StyledCtaOne>
    )
}
export default CtaOne
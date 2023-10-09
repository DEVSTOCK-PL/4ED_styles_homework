import styled from "styled-components";
import BlueButton from "../generalComponents/BlueButtons";
import GrayButton from "../generalComponents/GrayButton";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import MockupOne from "../image/MockupOne.svg";
import MockupTwo from "../image/MockupTwo.svg";
import MockupThree from "../image/MockupThree.svg";

const StyledCtaOne = styled.div`
width: 1440px;
height: 1440.34px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 10px;
background: #111928;
display: flex;
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
radius: 8px;
`
const ComplementaryContainer = styled.div`
heigh: 406.78px;
`
const RightContent = styled.div`
width: 640px;
height: 260px;
gap: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CtaOne = () => {
    return (
        <StyledCtaOne>
            <CtaContainer>
                <CtaRow>
                    <ImageCtaOne><image xlinkHref={MockupOne}/></ImageCtaOne>
                    <ComplementaryContainer>    
                        <RightContent>
                            <HeadingText width="640px" height="90px" description="Flowbite Green is a climate change non-profit organization."/>
                            <SupportingText width="640px" height="81px" fontSize="18px" lineHeight="27px" description="Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups." />
                        </RightContent>
                    </ComplementaryContainer>    
                </CtaRow>
                <CtaRow>
                    <ImageCtaOne><image xlinkHref={MockupTwo} /></ImageCtaOne>
                </CtaRow>
                <CtaRow>
                    <ImageCtaOne><image xlinkHref={MockupThree} /></ImageCtaOne>
                </CtaRow>
            </CtaContainer>
        </StyledCtaOne>
    )
}
export default CtaOne
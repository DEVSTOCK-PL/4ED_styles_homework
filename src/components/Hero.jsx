import styled from "styled-components";

import { HeadingText, SupportingText } from "../generalComponents/indexGeneralComponents";
import { CameraButton, DisneyHero, FedexHero, IntelHero, VisaHero, HeroCarousel } from "../image/indexImage";
import { breakpoints } from "./breakpoints";

const HeroComponent = styled.div`
width: 100%;
min-width: 1440px;
height: 626px;
background: #111928;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media screen and (max-width: ${breakpoints.m}) {
    margin: 0 32px;
}
@media screen and (max-width: ${breakpoints.xs}) {
height: auto;
padding: 20px 0px 0px 0px;
}
`

const HeroContainer = styled.div`
width: 100%;
max-width: 1280px;
height: 434px;
display: flex;
flex-direction: row;
justify-content: space-around;

@media screen and (max-width: ${breakpoints.xs}) {
flex-direction: column;
align-items: center;
height: auto;
}
`
const LeftContent = styled.div`
width: 576px;
height: 434px;
gap: 32px;
display: flex;
flex-direction:column;

@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
}
`
const LeftText = styled.div`
width:576px;
height: 206px;
gap: 20px;
`
const LeftButtons = styled.div`
width:380px;
height:48px;
gap: 16px;
display: flex;

@media screen and (max-width: ${breakpoints.xs}) {
    display: flex; 
    flex-direction: column;
    width: 90%;
    min-width: 343px;
    align-items: center;
}
`
const Sponsors = styled.div`
width: 576px;
height: 116px;
border: 1px 0px 0px 0px;
padding: 32px 0px 0px 0px;
gap: 12px;
border-top: 1px solid #374151;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const SupportingTextSponsors = styled.div`
width: 576px;
height: 24px;
font-weight: 500;
font-size: 16px;
line-height:24px;
color: #6B7280;
display:flex;
`
const Logos = styled.div`
width:576px;
height: 48px;
display: flex;
justify-content: space-between;

#media screen and (max-width: ${breakpoints.xs}) {
    width: 343px;
}
`
const CompanyLogo = styled.svg`
width: ${(props) => props.width};
height: 48px;
`
const RightContent = styled.div`
width:576px;
height: 434px;
display: flex;
justify-content: center;
align-items: center;
`
const CarouselRight= styled.image`
width:576px;
height: 360px;
border-radius:8px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.xs}) {
    width: 90%;
    min-width: 343px;
}
`
const BlueButtonHero = styled.button`
width: 182px;
height: 48px;
font-size: 16px; 
border-radius: 8px;
border: none;
background: #1A56DB;
padding: 12px 20px 12px 20px;
font-family: Inter;
font-weight: 500;
color: #FFF;
gap: 8px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.xs}) {
    width: 90%;
    min-width: 343px;
}
`
const GrayButton = styled(BlueButtonHero)`
background: #1F2A37;
color: #9CA3AF;
border: 1px #4B5563;
`
const CameraInButton = styled.svg`
width: 16px;
height: 12px; 
`

const Hero = () => {
    return (
        <HeroComponent>
            <HeroContainer>
                <LeftContent>
                    <LeftText>
                        <HeadingText
                            description="Making earth cooler for people, nature, climate">
                        </HeadingText>
                        <SupportingText description="Protecting the planet and its natural resources for future generations, by reducing pollution, promoting sustainability, and conserving energy and resources.">                            
                        </SupportingText>
                    </LeftText>
                    <LeftButtons>
                        <BlueButtonHero>Donate now</BlueButtonHero>
                        <GrayButton><CameraInButton><image xlinkHref={CameraButton} /></CameraInButton>Learn more</GrayButton>
                    </LeftButtons>
                    <Sponsors>
                        <SupportingTextSponsors>Sponsors:</SupportingTextSponsors>
                        <Logos>
                            <CompanyLogo width="87px"><image xlinkHref={IntelHero} alt="logo Intel" /></CompanyLogo>
                            <CompanyLogo width="112px"><image xlinkHref={FedexHero} alt="logo Fedex" /></CompanyLogo>
                            <CompanyLogo width="88px"><image xlinkHref={VisaHero} alt="logo Visa" /></CompanyLogo>
                            <CompanyLogo width="106px"><image xlinkHref={DisneyHero} alt="logo Disney" /></CompanyLogo>
                        </Logos>
                    </Sponsors>
                </LeftContent>
                <RightContent>
                    <CarouselRight><img src={HeroCarousel} alt="image" /></CarouselRight>
                </RightContent>    
            </HeroContainer>
        </HeroComponent>

    )
}

export default Hero
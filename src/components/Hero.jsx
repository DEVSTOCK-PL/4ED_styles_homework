import styled from "styled-components";
import BlueButton from "../generalComponents/BlueButtons";
import GrayButton from "../generalComponents/GrayButton";
import DisneyHero from '../image/DisneyHero.svg';
import FedexHero from "../image/FedexHero.svg";
import IntelHero from "../image/IntelHero.svg";
import VisaHero from '../image/VisaHero.svg';
import Carousel from "../image/Carousel.svg";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";

const HeroComponent = styled.div`
width: 1440px;
height: 626px;
padding: 96px, 0px, 96px, 0px;
background: #111928;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const HeroContainer = styled.div`
width: 1280px;
height: 434px;
display: flex;
flex-direction: row;
justify-content: space-around;

`
const LeftContent = styled.div`
width: 576px;
height: 434px;
gap: 32px;
display: flex;
flex-direction:column;
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
`
const SupportingTextSponsors = styled.div`
width: 576px;
height: 24px;
fontFamily: Inter;
fontWeight: 500;
fontSize: 16px;
lineHeight:24px;
color: #6B7280;
display:flex;
`
const Logos = styled.div`
width:576px;
height: 48px;
display: flex;
justify-content: space-between;
`
const IntelLogo = styled.svg`
width: 87px;
heigh: 48px;
`
const FedexLogo = styled.svg`
width: 112px;
heigh:48px;
`
const VisaLogo = styled.svg`
width:88px;
heigh:48px;
`
const DisneyLogo = styled.svg`
width:106px;
heigh: 48px;
`
const RightContent = styled.div`
width:576px;
heigh: 626px;
display: flex;
justify-content: center;
`
const CarouselRight= styled.svg`
width:576px;
heigh:360px;
radius:8px;
display: flex;
justifyContent: center;
alignItems: center;
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
                        <BlueButton width="182px" height="48px" padding="12px 20px 12px 20px" description="Donate now" fontSize="16px"></BlueButton> 
                        <GrayButton description="Learn more"></GrayButton>
                    </LeftButtons>
                    <Sponsors>
                        <SupportingTextSponsors>Sponsors:</SupportingTextSponsors>
                        <Logos>
                            <IntelLogo><image xlinkHref={IntelHero} alt="logo Intel" /></IntelLogo>
                            <FedexLogo><image xlinkHref={FedexHero} alt="logo Fedex" /></FedexLogo>
                            <VisaLogo ><image xlinkHref={VisaHero} alt="logo visa" /></VisaLogo>
                            <DisneyLogo><image xlinkHref={DisneyHero} alt="logo disney" /></DisneyLogo>
                        </Logos>
                    </Sponsors>
                </LeftContent>
                <RightContent>
                    <CarouselRight><image xlinkHref={Carousel} alt="image" /></CarouselRight>
                </RightContent>    
            </HeroContainer>
        </HeroComponent>

    )
}

export default Hero
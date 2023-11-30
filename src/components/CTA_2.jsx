import styled from "styled-components";
import { HeadingText, SupportingText, TransparentShareButton, LinkButton } from "../generalComponents/indexGeneralComponents";
import { LeftMockup, Shape, RightMockup } from "../image/indexImage";

// import useDonationState from "./Logic.jsx"
import { breakpoints } from "./breakpoints";

const StyledCtaTwo = styled.div`
width: 100%;
min-width: 1440px;
height: 997px;
background: #111928;
gap: 10px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: ${breakpoints.m}) {
    margin: 0 32px;
    height: auto;
}
`
const ContainerCtaTwo = styled.div`
width: 100%;
min-width: 1280px;
height:805px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding: 20px 0px;


@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
}
`
const TopContainer = styled.div`
width: 100%;
min-width: 1280px;
height: 121px;
display: flex;
justify-content: center;
`
const CenterContainer = styled(TopContainer)`
height: 593px;
align-items: center;

@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
}
`
const BottomContainer = styled(TopContainer)`
height: 27px;
align-items: center;
`
const HeadingCtaTwo = styled.div`
width: 676px;
height: 121px;
gap: 16px;
display: flex;
flex-direction: column;
align-items: center;
`
const ProgressBarContainer = styled.div`
width: 552px;
height: 41px;
display:flex;
flex-direction: column;
`

const CardCenterContainer = styled(CenterContainer)`
gap: 48px;

@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
    flex-direction: column;
}
`

const CardCenter = styled.div`
width: 616px;
height: 593px;
border-radius: 1px;
background: #1f2a37;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const LeftMockupContainer = styled.svg`
width: 552px;
height: 288px;

@media screen and (max-width: ${breakpoints.xs}) {
    min-width: 303px;
}
`
const StripeDonate = styled.div`
width: 552px;
height: 27px;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const LeftStripe = styled.div`
width: 178px;
height: 27px;
display: flex;
align-items: center;
justify-content: center;
`
const StateOfDonate = styled.div`
width: 86px;
height: 27px;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
`
const FinishStateDonate = styled.div`
width: 92px;
height: 21px; 
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #9CA3AF;
display: flex;
justify-content: center;
align-items: center;
`
const NumberOfDonors = styled.div`
width: 116.67px;
height: 18px;
font-size: 12px;
font-weight: 400;
line-height:18px;
align-items: right;
color: #9CA3AF;
display: flex;
justify-content: end;
align-items: center;
`
const TitleInTop = styled(HeadingText)`
    width: 640px;
    height: 45px;
    display: flex;
    justify-content: center;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 30px;
    line-height: 45px;
}
`
const PreviewInTop = styled(SupportingText)`
width: 640px;
height: 60px;
display: flex;
justify-content: center;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 16px;
    line-height: 24px;
}
`
const TitleDescription = styled.div`
width: 552px;
height: 23px;
font-weight: 700;
font-size: 18px;
line-height: 22.5px;
color: #FFF;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 18px;
    line-height: 22.5px;
}
`
const SupportingDescription = styled.div`
width: 552px;
height: 72px;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #9CA3AF;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 16px;
    line-height: 24px;
}
`
const SectionButtonContainer = styled.div`
width: 552px;
height: 41px;
`
const SectionButton = styled.div`
width: 347px;
height: 41px;
gap: 16px;
display: flex;
flex-direction: row;
`
const BlueStripe = styled.svg`
width: 441.6px;
height: 10px;
`
const GrayStripe = styled.div`
width:  552px;
height: 10px;
background: #374151;
display: flex;
`
const BlueButtons = styled.button`
width: 121px;
height: 41px;
border: none;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
background-color: #1C64F2;
font-size: 14px;
line-height: 21px;
color: #FFF;
font-weight: 500;
padding: 10px 20px 10px 20px;
`


const CtaTwo = () => {
    // const targetDonations = 400000;
    // const {donations, meterDonate, handleDonation } = useDonationState(targetDonations)
    return (
        <StyledCtaTwo>
            <ContainerCtaTwo>
                <TopContainer>
                    <HeadingCtaTwo>
                        <TitleInTop description="Fundraising events"></TitleInTop>
                        <PreviewInTop description="Flowbite helps you connect with friends, family and communities of people who share your interests." />
                    </HeadingCtaTwo>
                </TopContainer>
                <CenterContainer>
                    <CardCenterContainer>
                        <CardCenter>
                            <LeftMockupContainer><image xlinkHref={LeftMockup} /></LeftMockupContainer>
                            <ProgressBarContainer>
                                <StripeDonate>
                                    <LeftStripe>
                                        {/* <StateOfDonate>${donations}</StateOfDonate>
                                        <FinishStateDonate>of ${targetDonations} goal</FinishStateDonate> */}
                                    </LeftStripe>
                                    <NumberOfDonors>2,756 donors</NumberOfDonors>
                                </StripeDonate>
                                <GrayStripe><BlueStripe><image xlinkHref={Shape}/></BlueStripe></GrayStripe> 
                                {/* <GrayStripe><BlueStripe><meterDonate value={meterDonate} max={100}></meterDonate></BlueStripe></GrayStripe>  */}
                            </ProgressBarContainer>
                            <TitleDescription>Thank you for supporting in planting trees work. </TitleDescription>
                            <SupportingDescription>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingDescription>
                            <SectionButtonContainer>
                                <SectionButton>
                                    <BlueButtons onClick={()=>handleDonation(1000)}>Donate now</BlueButtons>
                                    <TransparentShareButton description="Share this Fundraiser" />
                                </SectionButton>
                            </SectionButtonContainer>    
                        </CardCenter>
                        <CardCenter>
                            <LeftMockupContainer><image xlinkHref={RightMockup} /></LeftMockupContainer>
                            <ProgressBarContainer>
                                <StripeDonate>
                                    <LeftStripe>
                                        <StateOfDonate>$75,856</StateOfDonate>
                                        <FinishStateDonate>of 150k goal</FinishStateDonate>
                                    </LeftStripe>
                                    <NumberOfDonors>568 donors</NumberOfDonors>
                                </StripeDonate>
                                <GrayStripe><BlueStripe><image xlinkHref={Shape}/></BlueStripe></GrayStripe>
                            </ProgressBarContainer>
                            <TitleDescription>Thank you for supporting our lifesaving work.</TitleDescription>
                            <SupportingDescription>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingDescription>
                            <SectionButtonContainer>
                                <SectionButton>
                                    <BlueButtons>Donate now</BlueButtons>
                                    <TransparentShareButton description="Share this Fundraiser" />
                                </SectionButton>
                            </SectionButtonContainer>
                        </CardCenter>
                    </CardCenterContainer>
                </CenterContainer>
                <BottomContainer>
                    <LinkButton width="253px" height="27px" description="View all fundraising events" />
                </BottomContainer>
            </ContainerCtaTwo>
        </StyledCtaTwo>
    )
}
export default CtaTwo
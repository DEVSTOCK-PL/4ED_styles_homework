import styled from "styled-components";
import { DonationProvider } from "../Logika/DonateContextForAll";
import ProgressBar from "./ProgressBar";
import Events from "./EventsDonate";
import ButtonDonate from "./ButtonDonate"
import LeftMockup from "../image/LeftMockup.svg"
import TransparentShareButton from "../generalComponents/Buttons/TransparentShareButton";
// import { useDonationContext } from "../Logika/DonateContextForAll";

const ProgressBarContainer = styled.div`
width: 552px;
height: 41px;
display:flex;
flex-direction: column;
`
const LeftMockupContainer = styled.svg`
width: 552px;
height: 288px;
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
font-family:Inter;
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
font-family: Inter;
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
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height:18px;
align-items: right;
color: #9CA3AF;
display: flex;
justify-content: end;
align-items: center;
`
const TitleDescription = styled.div`
width: 552px;
height: 23px;
font-family: Inter;
font-weight: 700;
font-size: 18px;
line-height: 22.5px;
color: #FFF;
`
const SupportingDescription = styled.div`
width: 552px;
height: 72px;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #9CA3AF;
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

const ContainerLeft = ({donations}) => {
    // const { donations } = useDonationContext()
console.log(donations, "w kontext")
    const targetDonations = 400000;

    return (
        <DonationProvider> 
            <LeftMockupContainer><image xlinkHref={LeftMockup} /></LeftMockupContainer>
                <ProgressBarContainer>
                    <StripeDonate>
                        <LeftStripe>
                            <StateOfDonate><Events /></StateOfDonate>
                            <FinishStateDonate>of ${targetDonations} goal</FinishStateDonate>
                        </LeftStripe>
                        <NumberOfDonors>2,756 donors</NumberOfDonors>
                    </StripeDonate>
                <ProgressBar donations={donations} targetDonations={targetDonations} />
                </ProgressBarContainer>
                <TitleDescription>Thank you for supporting in planting trees work. </TitleDescription>
                <SupportingDescription>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingDescription>
            <SectionButtonContainer>
                <SectionButton>
                    <ButtonDonate donateAmount={1000} disabled={false} />
                    <TransparentShareButton description="Share this Fundraiser" />
                </SectionButton>
            </SectionButtonContainer>   
        </DonationProvider>
    )
}
export default ContainerLeft
import styled from "styled-components";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";
import ContainerRight from "../DonateRight/ContainerRight";
import LinkButton from "../generalComponents/LinkButton"; 
import ContainerLeft from "../DonateLeft/ContainerLeft";

const StyledCtaTwo = styled.div`
width: 1440px;
height: 997px;
background: #111928;
gap: 10px;
display: flex;
align-items: center;
justify-content: center;
`
const ContainerCtaTwo = styled.div`
width: 1280px;
height:805px;
gap: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
const TopContainer = styled.div`
width: 1280px;
height: 121px;
display: flex;
justify-content: center;
`
const HeadingCtaTwo = styled.div`
width: 676px;
height: 121px;
gap: 16px;
display: flex;
flex-direction: column;
align-items: center;
`
const CenterContainer = styled.div`
width: 1280px;
height: 593px;
display: flex;
align-items: center;
justify-content: space-between;
`
const CardCenterContainer = styled.div`
width: 1280px;
heigh: 593px;
gap: 48px;
display: flex;
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
const BottomContainer = styled.div`
width: 1280px;
height: 27px;
display: flex;
justify-content: center;
align-items: center;
`


const CtaTwo = () => {
    // const { donations } = useDonationContext();
    // const { donations2 } = useDonationContext2();
    // console.log(donations2, "donations2", donations, "donations")

    // const targetDonations = 400000;
    // const targetDonations2 = 150000;

    return (
        <StyledCtaTwo>
            <ContainerCtaTwo>
                <TopContainer>
                    <HeadingCtaTwo>
                        <HeadingText width="640px" height="45px" display="flex" justifyContent="center" description="Fundraising events" />
                        <SupportingText width="640px" height="60px" display="flex" justifyContent="center" description="Flowbite helps you connect with friends, family and communities of people who share your interests. " />
                    </HeadingCtaTwo>
                </TopContainer>
                <CenterContainer>
                    <CardCenterContainer>
                        <CardCenter>
                            <ContainerLeft/>
                        </CardCenter>
                        <CardCenter>
                            <ContainerRight />
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
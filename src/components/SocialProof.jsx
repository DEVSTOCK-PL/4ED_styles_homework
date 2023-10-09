import styled from "styled-components";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";

const StyledSocialProof = styled.div`
width: 1440px;
height: 213px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 64px;
color: red;
display: flex;
`
const SocialProofContainer = styled.div`
width: 1280px;
height:117px;
gap: 48px;
display: flex;
`
const SocialProofRow = styled.div`
width:1024px;
height: 117px;
radius: 8px;
border: 1px solid #374151;
background: #1f2a37;
padding: 24px 16px 24px 16px;
display: flex;
`
const SocialProofStart = styled.div`
width: 248px;
height: 69px;
border: 0px 1px 0px 0px;
background: #374151;
`

const SocialProof = () => {
    return (
        <StyledSocialProof>
            <SocialProofContainer>
                <SocialProofRow>
                    <SocialProofStart>
                        <HeadingText width="248px" height="45px" description="104M"></HeadingText>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Trees planted"></SupportingText>
                    </SocialProofStart>
                    <SocialProofStart>
                        <HeadingText width="248px" height="45px" description="20k+"></HeadingText>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Partners & Donors"></SupportingText>
                    </SocialProofStart>
                     <SocialProofStart>
                        <HeadingText width="248px" height="45px" description="90M"></HeadingText>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Tonnes of Carbon Stored"></SupportingText>
                    </SocialProofStart>
                    <SocialProofStart>
                        <HeadingText width="248px" height="45px" description="50+"></HeadingText>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="People-Powered Projects"></SupportingText>
                    </SocialProofStart>
                </SocialProofRow>
            </SocialProofContainer>
        </StyledSocialProof>
    )
}
export default SocialProof
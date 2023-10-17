import styled from "styled-components";
import HeadingText from "../generalComponents/HeadingText";
import SupportingText from "../generalComponents/SupportingText";

const StyledSocialProof = styled.div`
width: 1440px;
height: 213px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 64px;
background: #111928;
display: flex;
justify-content: center;
`
const SocialProofContainer = styled.div`
width: 1280px;
height: 117px;
gap: 48px;
display: flex;
justify-content: center;
`
const SocialProofRow = styled.div`
width: 1024px;
height: 117px;
border-radius: 8px;
border: 1px solid #374151;
background: #1f2a37;
padding: 24px 16px 24px 16px;
display: flex;
justify-content: center;
align-items: center;
`
const SocialProofStatLine = styled.div`
width: 248px;
height: 69px;
border-right: 1px solid #374151;
background: #1f2a37;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const SocialProofStat = styled.div`
width: 248px;
height: 69px;
background: #1f2a37;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const SocialProof = () => {
    return (
        <StyledSocialProof>
            <SocialProofContainer>
                <SocialProofRow>
                    <SocialProofStatLine>
                        <HeadingText width="248px" height="45px" description="104M" display="flex" alignItems="center" justifyContent="center"/>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Trees planted" display="flex" alignItems="center" justifyContent="center"/>
                    </SocialProofStatLine>
                    <SocialProofStatLine>
                        <HeadingText width="248px" height="45px" description="20k+" display="flex" alignItems="center" justifyContent="center"/>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Partners & Donors" display="flex" alignItems="center" justifyContent="center"/>
                    </SocialProofStatLine>
                     <SocialProofStatLine>
                        <HeadingText width="248px" height="45px" description="90M" display="flex" alignItems="center" justifyContent="center"/>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="Tonnes of Carbon Stored" display="flex" alignItems="center" justifyContent="center"/>
                    </SocialProofStatLine>
                    <SocialProofStat>
                        <HeadingText width="248px" height="45px" description="50+" display="flex" alignItems="center" justifyContent="center"/>
                        <SupportingText width="248px" height="24px" fontSize="16px" lineHeight="24px" description="People-Powered Projects" display="flex" alignItems="center" justifyContent="center"/>
                    </SocialProofStat>
                </SocialProofRow>
            </SocialProofContainer>
        </StyledSocialProof>
    )
}
export default SocialProof
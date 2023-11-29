import styled from "styled-components";

import { HeadingText, SupportingText } from "../generalComponents/indexGeneralComponents";
import { breakpoints } from "./breakpoints";

const StyledSocialProof = styled.div`
width: 100%;
min-width: 1440px;
height: 213px;
border: 1px 0px 1px 0px;
padding: 0px 0px 96px 0px;
gap: 64px;
background: #111928;
display: flex;
justify-content: center;

@media screen and (max-width: ${breakpoints.m}){
    margin: 0 32px;
    height: auto;
}
@media screen and (max-width: ${breakpoints.xs}){
    height: auto;
    display: flex; 
    justify-content: center;
    padding: 15px 0px;
}
`
const SocialProofContainer = styled.div`
width: 100%;
min-width: 1280px;
height: 117px;
gap: 48px;
display: flex;
justify-content: center;

@media screen and (max-width: ${breakpoints.xs}){
    height: auto;
    width: 343px;
    display: flex; 
    justify-content: center;
    padding: 0 0 40px 0;
    border-radius: 8px;
}
`
const SocialProofRow = styled.div`
min-width: 1024px;
height: 117px;
border-radius: 8px;
border: 1px solid #374151;
background: #1f2a37;
padding: 24px 16px 24px 16px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: ${breakpoints.xs}){
    height: auto;
    display: flex;
    flex-direction: column;
    width: 65%;
    min-width: 343px;
    justify-content: center;
    gap: 15px;
}
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

@media screen and (max-width: ${breakpoints.xs}) {
    width: 311px;
}
`
const SocialProofStat = styled.div`
width: 248px;
height: 69px;
background: #1f2a37;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: ${breakpoints.xs}) {
    width: 311px;
}
`
const TitleText = styled(HeadingText)`
    width: 248px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content:center

    @media screen and (max-width: ${breakpoints.xs}) {
    width: 311px;
}
`
const PreviewText = styled(SupportingText)`
    width: 248px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${breakpoints.xs}) {
    width: 311px;
}
`
const SocialProof = () => {
    return (
        <StyledSocialProof>
            <SocialProofContainer>
                <SocialProofRow>
                    <SocialProofStatLine>
                        <TitleText description="104M" />
                        <PreviewText description="Trees planted" />
                    </SocialProofStatLine>
                    <SocialProofStatLine>
                        <TitleText description="20k+" />
                        <PreviewText description="Partners & Donors" />
                    </SocialProofStatLine>
                    <SocialProofStatLine>
                        <TitleText description="90M" />
                        <PreviewText description="Tonnes of Carbon Stored" />
                    </SocialProofStatLine>
                    <SocialProofStat>
                        <TitleText description="50+" />
                        <PreviewText description="People-Powered Projects" />
                    </SocialProofStat>
                </SocialProofRow>
            </SocialProofContainer>
        </StyledSocialProof>
    )
}
export default SocialProof
import styled from "styled-components";

import { LogoNavbarFooter, Githubgray, Dribbblegray, Twittergray,Facebookgray } from "../image/indexImage";
import { breakpoints } from "./breakpoints";

const StyledFooter = styled.div`
width: 100%;
min-width: 1440px;
min-height: 569px;
background: #1F2A37;
border-top: 1px #374151;
display: flex; 
justify-content: center;
align-items: center;
margin: 0 auto;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    margin: 0 32px;
    flex-wrap: wrap;
    align-items: center;
}
`
const ContainerFooter = styled.div`
width: 100%;
max-width: ${breakpoints.l};
height: 409px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: ${breakpoints.m}) {
    padding: 32px;
    height: auto;
    display: flex; 
    align-items: center;}

`
const NavContainerFooter = styled.div`
width:100%;
max-width: ${breakpoints.l};
height: 221px;
display: flex;
justify-content: space-between;

@media screen and (min-width: ${breakpoints.s}) and (max-width: ${breakpoints.m}) {
    flex-wrap: wrap;
    height: auto;
    align-items: center;
}
@media screen and (max-width: ${breakpoints.s}) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`;
const ColumnOne = styled.div`
max-width: 176px;
height: 221px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;

@media screen and (max-width: ${breakpoints.m}) {
    align-items: center;
    height: auto;
    justify-content: space-evenly;
}
`;
const ColumnTwo = styled(ColumnOne)`
height: 181px;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    justify-content: space-evenly;
}
`;
const ColumnThree = styled(ColumnOne)`
height: 181px;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    justify-content: space-evenly;
}
`;
const ColumnFour = styled(ColumnOne)`
height: 221px;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    justify-content: space-evenly;
}
`;
const ColumnFive = styled(ColumnOne)`
height: 141px;

@media screen and (max-width: ${breakpoints.m}) {
    height: auto;
    justify-content: space-evenly;
}
`;
const HeadingInColumn = styled.div`
height: 21px;
font-weight: 600;
font-size: 14px;
line-height: 21px;
display: flex;
justify-content: start;
align-items: center;
color: #FFF;

@media screen and (min-width: ${breakpoints.s}) and (max-width: ${breakpoints.m}) {
    font-size: 14px;
    line-height: 21px;
    height: 21px;
}
@media screen and (max-width: ${breakpoints.s}) {
    font-size: 14px;
    line-height: 21px;
    height: 21px;

}
`;
const LogoAndSocialLink = styled.div`
max-width: 384px;
height: 124px;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
margin-top: 64px;

@media screen and (max-width: ${breakpoints.m}) {
    flex-direction: inherit;
    align-items: center;
}
`
const LogoContainer = styled.div`
max-width: 1440px;
height: 36px;
display: flex;
flex-direction: row;
justify-content: space-around;

@media screen and (max-width: ${breakpoints.m}) {
    align-items: center;
}
`
const LogoStyled = styled.svg`
max-width: 32px;
max-height: 32px;
`
const LogoText = styled.div`
max-width: 100px;
max-height: 36px;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #FFF;
display: flex;
align-items: center;
padding: 6px;

@media screen and (min-width: ${breakpoints.s}) and (max-width: ${breakpoints.m}) {
    font-size: 22px;
    line-height: 28px;
    height: 32px;
    padding: 4px;
}
@media screen and (max-width: ${breakpoints.s}) {
    font-size: 20px;
    line-height: 20px;
    height: 32px;
}
`
const CopyrightContainer = styled.div`
max-width: 384px;
height: 24px;
font-size: 16px;
line-height: 24px;
font-weight: 400;
text-align: center;
color: #9CA3AF;

@media screen and (max-width: ${breakpoints.m}) {
    font-size: 12px;
    line-height: 20px;
    height: 20px;
}
`
const SocialLinksConatiner = styled.div`
max-width: 156px;
height: 24px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const LogoPlace = styled.svg`
max-width: 24px;
max-height: 24px;
`
const NewLink = styled.a`
height: 24px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #9CA3AF;
@media screen and (min-width: ${breakpoints.s}) and (max-width: ${breakpoints.m}) {
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    padding: 4px;
}
@media screen and (max-width: ${breakpoints.s}) {
    font-size: 12px;
    line-height: 20px;
    height: 20px;
}
`
const Footer = () => {
    return (
        <StyledFooter>
            <ContainerFooter>
                <NavContainerFooter>
                    <ColumnOne>
                        <HeadingInColumn>COMPANY</HeadingInColumn>
                        <NewLink>About</NewLink>
                        <NewLink>Premium</NewLink>
                        <NewLink>Blog</NewLink>
                        <NewLink>Affiliate Program</NewLink>
                        <NewLink>Get Coupon</NewLink>
                    </ColumnOne>
                    <ColumnTwo>
                        <HeadingInColumn>Help and support</HeadingInColumn>
                        <NewLink>Contact Us</NewLink>
                        <NewLink>Knowledge Center</NewLink>
                        <NewLink>Premium Support</NewLink>
                        <NewLink>Sponsorships</NewLink>
                    </ColumnTwo>
                    <ColumnThree>
                        <HeadingInColumn>Learning</HeadingInColumn>
                        <NewLink>Learn Hub</NewLink>
                        <NewLink>Manuals</NewLink>
                        <NewLink>Tutorials</NewLink>
                        <NewLink>Communities</NewLink>
                    </ColumnThree>
                    <ColumnFour>
                        <HeadingInColumn>RESOURCES</HeadingInColumn>
                        <NewLink>Third-Party Tools</NewLink>
                        <NewLink>Illustrations</NewLink>
                        <NewLink>Themesberg</NewLink>
                        <NewLink>Bluehost</NewLink>
                        <NewLink>Stock Photos</NewLink>
                    </ColumnFour>
                    <ColumnFive>
                        <HeadingInColumn>LEGAL</HeadingInColumn>
                        <NewLink>Privacy Policy</NewLink>
                        <NewLink>Terms & Conditions</NewLink>
                        <NewLink>EULA</NewLink>
                    </ColumnFive>
                </NavContainerFooter>
                <LogoAndSocialLink>
                    <LogoContainer>
                        <LogoStyled><image xlinkHref={LogoNavbarFooter} /></LogoStyled>
                        <LogoText>Flowbite</LogoText>
                    </LogoContainer>
                    <CopyrightContainer>© 2022 Flowbite, Inc. All rights reserved.</CopyrightContainer>
                    <SocialLinksConatiner>
                        <LogoPlace><image xlinkHref={Githubgray} /></LogoPlace>
                        <LogoPlace><image xlinkHref={Twittergray} /></LogoPlace>
                        <LogoPlace><image xlinkHref={Dribbblegray} /></LogoPlace>
                        <LogoPlace><image xlinkHref={Facebookgray} /></LogoPlace>
                    </SocialLinksConatiner>
                </LogoAndSocialLink>
            </ContainerFooter>
        </StyledFooter>
    )
}
export default Footer
import styled from "styled-components";
import LinkFooter from "../generalComponents/LinkFooter";
import LogoNavbarFooter from "../image/LogoNavbarFooter.svg"
import Githubgray from "../image/Githubgray.svg"
import Twittergray from "../image/Twittergray.svg"
import Dribbblegray from "../image/Dribbblegray.svg"
import Facebookgray from "../image/Facebookgray.svg"

const StyledFooter = styled.div`
width: 1440px;
height: 569px;
background: #1F2A37;
border-top: 1px #374151;
display: flex; 
justify-content: center;
align-items: center;
`
const ContainerFooter = styled.div`
width: 1280px;
height: 409px;
display: flex;
flex-direction: column;
align-items: center;
`
const NavContainerFooter = styled.div`
width: 1280px;
height: 221px;
display: flex;
justify-content: space-between;
`
const ColumnOne = styled.div`
width: 176px;
height: 221px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
`
const ColumnTwo = styled.div`
width: 176px;
height: 181px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
`
const ColumnThree = styled.div`
width: 176px;
height: 181px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
`
const ColumnFour = styled.div`
width: 176px;
height: 221px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
`
const ColumnFive = styled.div`
width: 176px;
height: 141px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
`
const HeadingInColumn = styled.div`
height: 21px;
font-family: Inter;
font-weight: 600;
font-size: 14px;
line-height: 21px;
display: flex;
justify-content: start;
align-items: center;
color: #FFF;
`
const LogoAndSocialLink = styled.div`
width: 384px;
height: 124px;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
margin-top: 64px;
`
const LogoContainer = styled.div`
width: 144px;
height: 36px;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const LogoStyled = styled.svg`
width: 32px;
height: 32px;
`
const LogoText = styled.div`
width: 100px;
height: 36px;
font-family: Inter;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #FFF;
`
const CopyrightContainer = styled.div`
width: 384px;
height: 24px;
font-family: Inter;
font-size: 16px;
line-height: 24px;
font-weight: 400;
text-align: center;
color: #9CA3AF;
`
const SocialLinksConatiner = styled.div`
width: 156px;
height: 24px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const LogoPlace = styled.svg`
width: 24px;
height: 24px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <ContainerFooter>
                <NavContainerFooter>
                    <ColumnOne>
                        <HeadingInColumn>COMPANY</HeadingInColumn>
                        <LinkFooter description="About" />
                        <LinkFooter description="Premium" />
                        <LinkFooter description="Blog" />
                        <LinkFooter description="Affiliate Program" />
                        <LinkFooter description="Get Coupon" />
                    </ColumnOne>
                    <ColumnTwo>
                        <HeadingInColumn>Help and support</HeadingInColumn>
                        <LinkFooter description="Contact Us" />
                        <LinkFooter description="Knowledge Center" />
                        <LinkFooter description="Premium Support" />
                        <LinkFooter description="Sponsorships" />
                    </ColumnTwo>
                    <ColumnThree>
                        <HeadingInColumn>Learning</HeadingInColumn>
                        <LinkFooter description="Learn Hub" />
                        <LinkFooter description="Manuals" />
                        <LinkFooter description="Tutorials" />
                        <LinkFooter description="Communities" />
                    </ColumnThree>
                    <ColumnFour>
                        <HeadingInColumn>RESOURCES</HeadingInColumn>
                        <LinkFooter description="Third-Party Tools" />
                        <LinkFooter description="Illustrations" />
                        <LinkFooter description="Themesberg" />
                        <LinkFooter description="Bluehost" />
                        <LinkFooter description="Stock Photos" />
                    </ColumnFour>
                    <ColumnFive>
                        <HeadingInColumn>LEGAL</HeadingInColumn>
                        <LinkFooter description="Privacy Policy" />
                        <LinkFooter description="Terms & Conditions" />
                        <LinkFooter description="EULA" />
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
import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import { CardOne, CardTwo, CardThree, CardFour } from "./CardOne";

const StyledCtaTwo = styled.div`
width: 100%;
min-width: 1440px;
height: auto;
background: #111928;
gap: 10px;
display: flex;
align-items: center;
flex-direction: column;

@media screen and (max-width: ${breakpoints.m}) {
    margin: 0 32px;
    height: auto;
}
`
const ContainerCtaTwo = styled.div`
width: 100%;
min-width: 1280px;
height: auto;
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
const CenterContainer = styled.div`
width: 100%;
min-width: 1280px;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
}
`
const HeadingCtaTwo = styled.div`
width: 676px;
height: 121px;
gap: 16px;
display: flex;
flex-direction: column;
align-items: center;
`
const CardCenterContainer = styled(CenterContainer)`
gap: 48px;

@media screen and (max-width: ${breakpoints.xs}) {
    height: auto;
    flex-direction: column;
}
`

const TitleInTop = styled.div`
    width: 640px;
    height: 45px;
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    display: flex;
    justify-content: center;
    color: #FFF;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 30px;
    line-height: 45px;
}
`
const PreviewInTop = styled.div`
width: 640px;
height: 60px;
display: flex;
justify-content: center;
font-size: 20px;
font-weight: 400;
line-height: 30px;
color: #9CA3AF;

@media screen and (max-width: ${breakpoints.xs}) {
    font-size: 16px;
    line-height: 24px;
}
`


const CtaTwo = () => {

    console.log()
    return (
        <StyledCtaTwo>
            <ContainerCtaTwo>
                <TopContainer>
                    <HeadingCtaTwo>
                        <TitleInTop>Fundraising events</TitleInTop>
                        <PreviewInTop>Flowbite helps you connect with friends, family and communities of people who share your interests.</PreviewInTop>
                    </HeadingCtaTwo>
                </TopContainer>
                <CenterContainer>
                    <CardCenterContainer>
                        <CardOne />
                        <CardTwo />
                        <CardFour />
                        <CardThree />
                    </CardCenterContainer>
                </CenterContainer>
            </ContainerCtaTwo>
        </StyledCtaTwo>
    )
}
export default CtaTwo
import { useState } from "react";
import styled from "styled-components";
import { TransparentShareButton } from "../generalComponents/indexGeneralComponents";
import { LeftMockup, RightMockup } from "../image/indexImage"
import ProgressBar from "../Hooks/ProgressBar";

const CardOneStyled = styled.div`
width: 616px;
height: 593px;
border-radius: 1px;
background: #1f2a37;
display: flex;
flex-direction: column;
align-items: center;
`
const MockupContainer = styled.svg`
width: 552px;
height: 288px;
`
const ProgressBarContainer = styled.div`
width: 552px;
height: 41px;
color: #fff;
`
const HeadingCard = styled.div`
width: 552px;
height: 23px;
font-size: 18px;
font-weight: 700;
line-height: 22.5px;
color: #fff;
`
const SupportingCard = styled.div`
width: 552px;
height: 72px;
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #9CA3AF;
`
const SectorButton = styled.div`
width: 552px;
height: 41px;
display: flex;
flex-direction: row;
gap: 16px;
`
const ButtonLine = styled(SectorButton)`
width: 347px;
`
const BlueButton = styled.button`
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


export const CardOne = ({progress}) => {
    const targetDonations = 400000
    const [wynik1, setWynik1] = useState(0)
    const handleClick1 = () => {
        if (wynik1 + 50000 <= targetDonations) {
            setWynik1(wynik1 + 50000)
        }
    }
    let donations = wynik1

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ LeftMockup } /></MockupContainer>
            <ProgressBarContainer>
                {wynik1}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton onClick={handleClick1}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardTwo = ({ progress }) => {
    const targetDonations = 150000
    const [wynik2, setWynik2] = useState(0)
    const handleClick2 = () => {
        if (wynik2 + 30000 <= targetDonations) {
            setWynik2(wynik2 + 30000)
        }
    }
    let donations = wynik2

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ RightMockup } /></MockupContainer>
            <ProgressBarContainer>
                {wynik2}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton onClick={handleClick2}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardThree = ({ progress }) => {
    const targetDonations = 400000
    const [wynik3, setWynik3] = useState(0)
    const handleClick3 = () => {
        if (wynik3 + 50000 <= targetDonations) {
            setWynik3(wynik3 + 50000)
        }
    }
    let donations = wynik3

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ LeftMockup } /></MockupContainer>
            <ProgressBarContainer>
                {wynik3}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton onClick={handleClick3}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardFour = ({ progress }) => {
    const targetDonations = 150000
    const [wynik4, setWynik4] = useState(0)
    const handleClick4 = () => {
        if (wynik4 + 30000 <= targetDonations) {
            setWynik4(wynik4 + 30000)
        }
    }
        let donations = wynik4

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ RightMockup } /></MockupContainer>
            <ProgressBarContainer>
                {wynik4}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton onClick={handleClick4}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}
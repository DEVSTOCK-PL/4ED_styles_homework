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
justify-content: space-evenly;
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
font-size: 14px;
line-height: 21px;
background-color: ${(props)=>(props.disabled ? "#9CA3AF" : "#1C64F2" )};
color: ${(props)=>(props.disabled ? "#EF350D" : "#FFF")};
font-weight: 500;
padding: 10px 20px 10px 20px;
`


export const CardOne = ({progress}) => {
    const targetDonations = 400000
    const [donate1, setDonate1] = useState(0)
    const handleClick1 = () => {
        if (donate1 + 50000 <= targetDonations) {
            setDonate1(donate1 + 50000)
        }
    }
    let donations = donate1;

    const isDisabled = donate1 >= targetDonations;

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ LeftMockup } /></MockupContainer>
            <ProgressBarContainer>
                {donate1}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton disabled={isDisabled} onClick={handleClick1}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardTwo = ({ progress }) => {
    const targetDonations = 150000
    const [donate2, setDonate2] = useState(0)
    const handleClick2 = () => {
        if (donate2 + 30000 <= targetDonations) {
            setDonate2(donate2 + 30000)
        }
    }
    let donations = donate2

    const isDisabled = donate2 >= targetDonations;


    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ RightMockup } /></MockupContainer>
            <ProgressBarContainer>
                {donate2}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton disabled={isDisabled} onClick={handleClick2}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardThree = ({ progress }) => {
    const targetDonations = 400000
    const [donate3, setDonate3] = useState(0)
    const handleClick3 = () => {
        if (donate3 + 50000 <= targetDonations) {
            setDonate3(donate3 + 50000)
        }
    }
    let donations = donate3

    const isDisabled = donate3 >= targetDonations;

    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ LeftMockup } /></MockupContainer>
            <ProgressBarContainer>
                {donate3}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton disabled={isDisabled} onClick={handleClick3}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}

export const CardFour = ({ progress }) => {
    const targetDonations = 150000
    const [donate4, setDonate4] = useState(0)
    const handleClick4 = () => {
        if (donate4 + 30000 <= targetDonations) {
            setDonate4(donate4 + 30000)
        }
    }
    let donations = donate4
    
    const isDisabled = donate4 >= targetDonations;


    return (
        <CardOneStyled>
            <MockupContainer><image xlinkHref={ RightMockup } /></MockupContainer>
            <ProgressBarContainer>
                {donate4}
            <ProgressBar donations={donations} targetDonations={targetDonations}></ProgressBar>
            </ProgressBarContainer>
            <HeadingCard>Thank you for supporting in planting trees work. </HeadingCard>
            <SupportingCard>Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.</SupportingCard>
            <SectorButton>
                <ButtonLine>
                    <BlueButton disabled={isDisabled} onClick={handleClick4}>Donate now</BlueButton>
                    <TransparentShareButton description="Share this Fundraiser"/>
                </ButtonLine>
            </SectorButton>
        </CardOneStyled>
    )
}
import React, {useContext} from "react";
import { DonationContext } from "../Logika/DonateContextForAll"
import styled from "styled-components";

const ButtonForDonate = styled.button`
width: 121px;
height: 41px;
background: #1C64F2;
color: #fff;
font-family: Inter;
font-size: 14px;
line-height: 21px;
`

const ButtonDonate = ({donateAmount, disabled}) => {

    const { donate } = useContext(DonationContext)
    console.log(donate)
    const donateClick = () => {
        donate (donateAmount)
    }
    return (        
        <ButtonForDonate onClick={donateClick} disabled={disabled}>Donate now</ButtonForDonate>
    )
}
export default ButtonDonate

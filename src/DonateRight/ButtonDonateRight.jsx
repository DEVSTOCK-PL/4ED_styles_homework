import {useContext} from "react";
import styled from "styled-components";
import { DonationContext2 } from "../Logika/DonateContextForAll";

const ButtonForDonate = styled.button`
width: 121px;
height: 41px;
background: #1C64F2;
color: #fff;
font-family: Inter;
font-size: 14px;
line-height: 21px;
`

const ButtonDonateRight = ({ donateAmount2, disabled }) => {

    const{ donate2 } = useContext(DonationContext2)
    const donateClick2 = () => {
        donate2(donateAmount2)

    }
    return (        
        <ButtonForDonate onClick={donateClick2} disabled={disabled}>Donate now</ButtonForDonate>
    )
}
export default ButtonDonateRight

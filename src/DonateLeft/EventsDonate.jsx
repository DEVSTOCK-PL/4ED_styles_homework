import React from "react";
import styled from "styled-components";
import { useDonationContext } from "../Logika/DonateContextForAll";

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const StateOfDonate = styled.div`
width: 86px;
height: 27px;
font-family:Inter;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #black;
display: flex;
justify-content: center;
align-items: center;
`

const Events = () => {
    const { donations } = useDonationContext();
    console.log(donations, "donations w ev")

    return (
        <Wrapper>
            <StateOfDonate>${donations}</StateOfDonate>
        </Wrapper>
    );
}

export default Events
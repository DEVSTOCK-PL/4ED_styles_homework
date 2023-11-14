import styled from "styled-components";
import { useDonationContext2 } from "../Logika/DonateContextForAll";

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

const EventsRight = () => {
    const { donations2 } = useDonationContext2();
    console.log(donations2, "donations2 w evR")

    return (
        <Wrapper>
            <StateOfDonate>${donations2}</StateOfDonate>
        </Wrapper>
    );
}

export default EventsRight
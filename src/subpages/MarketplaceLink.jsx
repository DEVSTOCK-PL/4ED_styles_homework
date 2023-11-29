import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperMarketPlace = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    text-align: center;
}
`
const Title = styled.h1`
font-size: 36px;
text-align: center;
`
const CustomNav = styled(Title)`
    border: 1px solid green;
    padding: 10px;
`
const MarketPlaceLink = () => {
    return (
    <WrapperMarketPlace>
        <Title>Marketplace</Title>
        <h3>Cooperation offers</h3>    
        <p>We are looking for employees for our branch in Szczecin.</p>
        <Title>Interested? Skontaktuj się z nami</Title>
        <Link to={"/contact"}>
            <CustomNav>Contact</CustomNav>
        </Link>
        </WrapperMarketPlace>
    )
}

export default MarketPlaceLink
import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperFeatures = styled.div`
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
const FeaturesLink = () => {
    return (
    <WrapperFeatures>
        <Title>Features</Title>
        <h3>Flowbite Green</h3>    
        <p>We are a non-profit organization dedicated to combating climate change.</p>
        <Title>Interested? Skontaktuj się z nami</Title>
        <Link to={"/contact"}>
            <CustomNav>Contact</CustomNav>
        </Link>
        </WrapperFeatures>
    )
}

export default FeaturesLink
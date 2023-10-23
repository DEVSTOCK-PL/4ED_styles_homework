import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperContact = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    text-align: center;
}
`
const TitleContact = styled.h1`
font-size: 36px;
text-align: center;
`
const CustomNav = styled(TitleContact)`
    border: 1px solid green;
    padding: 10px;
`
const ContactLink = () => {
    return (
    <WrapperContact>
        <TitleContact>Contact</TitleContact>
        <h3>Centrala</h3>
        <p>Warszawa</p>
        <h3>Oddział Szczecin</h3>
        <p>Szczecin</p>
        <TitleContact>Skontaktuj się z nami</TitleContact>
        <Link to={"/contact"}>
            <CustomNav>Contact</CustomNav>
        </Link>
        </WrapperContact>
    )
}
export default ContactLink
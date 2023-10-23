import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperTeamLink = styled.div`
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
const TeamLink = () => {
    return (
    <WrapperTeamLink>
        <Title>Team</Title>
        <h3>Centrala - Warszawa</h3>    
        <p>Magicy i Mentorzy</p>
        <h4>Oddział Szczecin</h4>  
        <p>Stazysta</p>        
        <Title>Zainteresowany? Skontaktuj się z nami</Title>
        <Link to={"/contact"}>
            <CustomNav>Contact</CustomNav>
        </Link>
        </WrapperTeamLink>
    )
}

export default TeamLink
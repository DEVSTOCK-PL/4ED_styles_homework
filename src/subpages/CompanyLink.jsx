import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperCompany = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    text-align: center;
}
`
const TitleCompany = styled.h1`
font-size: 36px;
text-align: center;
`
const CustomNav = styled(TitleCompany)`
    border: 1px solid green;
    padding: 10px;
`
const CompanyLink = () => {
    return (
    <WrapperCompany>
        <TitleCompany>Company</TitleCompany>
        <p>Lorem ipsum...</p>
        <TitleCompany>Skontaktuj się z nami</TitleCompany>
        <Link to={"/contact"}>
            <CustomNav>Contact</CustomNav>
        </Link>
        </WrapperCompany>
    )
}

export default CompanyLink
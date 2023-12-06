import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperNotFound = styled.div`
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
const NotFoud = () => {

    <WrapperNotFound>
        <TitleContact>404</TitleContact>
        <p>Upssssssik, taka strona nie istnieje!!</p>
        <Link to={"/"}>
            <CustomNav>Wracamy na stronę główną</CustomNav>
        </Link>
        </WrapperNotFound>
    
}

export default NotFoud
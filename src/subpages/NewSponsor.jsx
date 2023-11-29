import styled from "styled-components";
import { Link } from 'react-router-dom';

const WrapperNewSponsor = styled.div`
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
const NewSponsor = (props) => {
    return(
    <WrapperNewSponsor>
        <TitleContact>Become a sponsor</TitleContact>
        <p>Cierpisz na nadmiar pieniędzy?? Zapraszamy Cię i twoją kapustę.</p>
        <h3>Inne sposoby wsparcia</h3>
        <p>Jeśli nie jesteś w stanie wspierać nas regularnie sporym workiem pieniędzy, wrzuć donate!!</p>
        <CustomNav onClick={props.scrollToSection}>Więcej informacji o moliwym wsparciu</CustomNav>
        </WrapperNewSponsor>
    )
}

export default NewSponsor
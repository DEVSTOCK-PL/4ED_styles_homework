import styled from 'styled-components'

const StyledButton = styled.button`
background-color: #1A56DB;
width: 117px;
height: 41px;
border-radius: 8px;
border: none;
font-size: 14px;
font-family: Inter;
line-height: 21px;
color: #FFF;
font-weight: 500;
`;

// eslint-disable-next-line
const Button = ( { description } ) => {
	return (
		<StyledButton>{description}</StyledButton>
	);
}
export default Button;

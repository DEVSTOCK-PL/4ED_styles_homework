import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.backgroundColor ||  '#1A56DB' };
	width: ${ (props) => props.width || '117px' };
	height: ${ (props) => props.height || '41px' };
	color: ${ (props) => props.color || '#FFF' };
	border: ${ (props) => props.border || 'none' };
	border-radius: 8px;
	font-size: 14px;
	font-family: Inter;
	line-height: 21px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
`
const IconLeft = styled.img`
	margin-right: 8px;		
` 
const IconRight = styled.img`
	margin-left: 8px;		
` 

// eslint-disable-next-line
const Button = ( { description, backgroundColor, width, height, color, iconLeft, iconRight, border } ) => {
	return (
		<StyledButton 
			backgroundColor={backgroundColor} 
			width={width} 
			height={height}
			color={color}
			border={border}>
				<IconLeft src={iconLeft}/> {description} <IconRight src={iconRight}/>
		</StyledButton>
	);
}
export default Button;
 
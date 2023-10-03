import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.backgroundColor ||  '#1A56DB' };
	width: ${ (props) => props.width || '117px' };
	height: ${ (props) => props.height || '41px' };
	color: ${ (props) => props.color || '#FFF' };
	border: ${ (props) => props.border || 'none' };
	
	font-size: ${ (props) => props.fontSize || '14px' };
	font-family: Inter;
	border-radius: 8px;
	line-height: 24px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
`
const IconLeft = styled.img`
	margin-right: 8px;		
` 
const IconRight = styled.img`
	margin-left: 8px;		
` 

// eslint-disable-next-line
const Button = ( { description, backgroundColor, width, height, color, iconLeft, iconRight, border, fontSize } ) => {
	return (
		<StyledButton 
			backgroundColor={backgroundColor} 
			width={width} 
			height={height}
			fontSize={fontSize}
			color={color}
			border={border}>
				<IconLeft src={iconLeft}/> {description} <IconRight src={iconRight}/>
		</StyledButton>
	);
}
export default Button;
 
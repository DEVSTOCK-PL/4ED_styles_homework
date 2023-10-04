import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.backgroundColor ||  '#1A56DB' };
	width: ${ (props) => props.width || '117px' };
	height: ${ (props) => props.height || '41px' };
	color: ${ (props) => props.color || '#FFF' };
	border: ${ (props) => props.border || 'none' };
	font-weight: ${ (props) => props.fontWeight || '500' };
	font-size: ${ (props) => props.fontSize || '14px' };
	line-height: ${ (props) => props.lineHeight|| '24px' };
	font-family: Inter;
	border-radius: 8px;
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
const Button = ( { description, backgroundColor, width, height, color, iconLeft, iconRight, border, fontSize, fontWeight, lineHeight } ) => {
	return (
		<StyledButton 
			backgroundColor={backgroundColor} 
			width={width} 
			height={height}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			color={color}
			border={border}>
				<IconLeft src={iconLeft}/> {description} <IconRight src={iconRight}/>
		</StyledButton>
	);
}
export default Button;
 
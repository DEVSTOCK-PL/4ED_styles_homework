import styled from 'styled-components'

const StyledButton = styled.button`
	display: flex;
	background-color: ${(props) => props.backgroundColor ||  '#1A56DB'};
	width: ${(props) => props.width || '117px'};
	height: ${(props) => props.height || '41px'};
	color: ${(props) => props.color || 'white'};
	border: ${(props) => props.border || 'none'};
	font-size: ${(props) => props.fontSize || '14px'};
	line-height: ${(props) => props.lineHeight || '24px'};
	font-weight: ${(props) => props.fontWeight || '500'};
	font-family: Inter;
	border-radius: 8px;
	align-items: ${(props) => props.alignItems || 'center'};
	padding: 0;
	margin-left: 0px;
	justify-content: ${(props) => props.justifyContent || 'center'};
	cursor: pointer;
`
const IconLeft = styled.img`
	margin-right: ${(props) => props.marginRight || '8px'};		
` 
const IconRight = styled.img`
	margin-left: ${(props) => props.marginLeft || '8px'};		
` 

const Button = ({description, width, height, color, backgroundColor, iconLeft, iconRight, fontWeight, lineHeight, fontSize, alignItems, justifyContent, border, marginLeft, marginRight}) => {
	return (
		<StyledButton 
			backgroundColor={backgroundColor} 
			width={width} 
			height={height}
			fontSize={fontSize}
			color={color}
			border={border}>
				<IconLeft 
					src={iconLeft}
					marginRight={marginRight}/>
				{description} 
				<IconRight 
					src={iconRight}
					marginLeft={marginLeft}/>
		</StyledButton>
	);
}
export default Button;


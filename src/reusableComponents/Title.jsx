import styled from 'styled-components'

const Container = styled.p`
	width: ${ (props) => props.width || '576px' };
	height: ${ (props) => props.height || '96px' };
	font-size: ${ (props) => props.fontSize || '48px' };
	font-weight: ${ (props) => props.fontWeight || '800' };
	color: ${ (props) => props.color || '#FFF' };
	font-family: Inter;
	/* display: flex; */
	text-align: ${ (props) => props.textAlign || 'left' };
	line-height: ${ (props) => props.lineHeight || '40px' };
	margin: 0;
	padding: 0;
`

const Title = ( { text, width, height, fontSize, fontWeight, color, lineHeight, textAlign} ) => {
	return (
		<Container 
			width={width}
			height={height}
			fontSize={fontSize}
			fontWeight={fontWeight}
			color={color}
			lineHeight={lineHeight}
			textAlign={textAlign}>
				{text}
		</Container>
	);
}
export default Title;

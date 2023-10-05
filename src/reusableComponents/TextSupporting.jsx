import styled from 'styled-components'

const Container = styled.p`
	width: ${ (props) => props.width || '576px' };
	height: ${ (props) => props.height || '96px' };
	font-size: ${ (props) => props.fontSize || '20px' };
	font-weight: ${ (props) => props.fontWeight || '400' };
	color: ${ (props) => props.color || '#9CA3AF' };
	line-height: ${ (props) => props.lineHeight || '30px' };
	text-align: ${ (props) => props.textAlign || 'left' };
	font-family: Inter;
	/* display: flex; */
	margin: 0;
	padding: 0;
`

const TextSupporting = ( { text, width, height, fontSize, fontWeight, color, lineHeight, textAlign } ) => {
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
export default TextSupporting;

import styled from "styled-components"

const StyledHeadingText = styled.div`
width: ${(props) => props.width || "576px"};
height:${(props) => props.height || "96px"};
font-family: Inter;
font-size: ${(props) => props.fontSize || "36px"};
font-weight:${(props) => props.fontWeight || "800"};
line-height: ${(props) => props.lineHeight || "45px"};
color: #ffffff;
`
const HeadingText = ({ description, width, height, fontSize, fontWeight, lineHeight }) => {
    return (
        <StyledHeadingText 
            width={width}
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}>
            {description}
            </StyledHeadingText>
    )
}
export default HeadingText



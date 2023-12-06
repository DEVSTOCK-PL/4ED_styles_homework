import styled from "styled-components"

const StyledHeadingText = styled.div`
width: ${(props) => props.width || "576px"};
height:${(props) => props.height || "96px"};
font-family: Inter;
font-size: ${(props) => props.fontSize || "36px"};
font-weight:${(props) => props.fontWeight || "800"};
line-height: ${(props) => props.lineHeight || "45px"};
color: #ffffff;
display: ${(props) => props.display || ""};
flex-direction: ${(props)=>props.flexDirection||""};
justify-content: ${(props) => props.justifyContent || ""};
align-items: ${(props) => props.alignItems || ""};
`
const HeadingText = ({ description, width, height, fontSize, fontWeight, lineHeight, display, justifyContent, alignItems, flexDirection,}) => {
    return (
        <StyledHeadingText 
            width={width}
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            display={display}
            justifyContent={justifyContent}
            alignItems={alignItems}
            flexDirection={flexDirection}>
            {description}
            </StyledHeadingText>
    )
}
export default HeadingText



import styled from "styled-components";

const StyledSupportingText = styled.div`
width: ${(props) => props.width || "576px"};
height: ${(props) => props.height || "90px"};
font-family: Inter;
font-weight: ${(props) => props.fontWeight || "400"};
font-size: ${(props) => props.fontSize || "20px"};
line-height: ${(props) => props.lineHeight || "30px"};
color: #9CA3AF;
display: ${(props) => props.display || ""};
flex-direction: ${(props)=>props.flexDirection||""};
justify-content: ${(props) => props.justifyContent || ""};
align-items: ${(props) => props.alignItems || ""};
`

const SupportingText = ({ description, width, height, fontWeight, fontSize, lineHeight, display, flexDirection, justifyContent ,alignItems, }) => {
    return(
        <StyledSupportingText
            width={width}
            height={height}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            display={display}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}>
            {description}
        </StyledSupportingText>
    )
}
export default SupportingText
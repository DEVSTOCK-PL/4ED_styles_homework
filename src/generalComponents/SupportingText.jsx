import styled from "styled-components";

const StyledSupportingText = styled.div`
width: ${(props) => props.width || "576px"};
height: ${(props) => props.height || "90px"};
font-family: Inter;
font-weight: ${(props) => props.fontWeight || "400"};
font-size: ${(props) => props.fontSize || "20px"};
line-height: ${(props) => props.lineHeight || "30px"};
color: #9CA3AF;
`

const SupportingText = ({ description, width, height, fontWeight, fontSize, lineHeight, }) => {
    return(
        <StyledSupportingText
            width={width}
            height={height}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}>
            {description}
        </StyledSupportingText>
    )
}
export default SupportingText
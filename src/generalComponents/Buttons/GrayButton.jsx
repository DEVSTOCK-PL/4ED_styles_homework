import styled from "styled-components";
import { CameraSVG } from "../../image/indexImage";

const StyledGrayButton = styled.button`
width: ${(props) => props.width || "182px"};
height: ${(props) => props.height || "48px"};
border-radius: "8px";
border: ${(props)=> props.border||"1px #4B5563"};
gap: "8px";
background: ${(props) => props.background || "#1F2A37"};
padding:${(props) => props.padding || "12px,20px,12px,20px"};
font-family: "Inter";
weight-family: ${(props) => props.weightFamily || "500"};
font-size:${(props) => props.fontSize || "16px"};
color: #9CA3AF;
display: "flex";
justify-content: center;
align-items: center;
`
const CameraIcon = styled.image`
width:"20px";
height:"20px";
`

const GrayButton = ({ description, width, height, border, background, padding, weightFamily, fontSize, }) => {
    return (
        <StyledGrayButton 
            width={width}
            height={height}
            border={border}
            background={background}
            padding={padding}
            weightFamily={weightFamily}
            fontSize={fontSize}>
                <CameraIcon src={CameraSVG}/>
                {description}
            </StyledGrayButton>
    )
}
export default GrayButton
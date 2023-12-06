import styled from "styled-components"
// import iconRight from "../image/iconRight.svg"

const StyledBlueButtons = styled.button`
background-color: ${(props)=> props.backgroundColor || '#1A56DB'};
width: ${(props) => props.width || '117px'};
height: ${(props) => props.height || '41px'};
border: ${(props)=>props.border||"none"};
border-radius: ${(props) => props.borderRadius || '8px'};
padding: ${(props) => props.padding || "10px 20px 10px 20px"};
gap: ${(props) => props.gap || "8px"};
color: ${(props) => props.color || "#FFF"};
font-size: ${(props) => props.fontSize||"14px"};
font-weight: ${ (props) => props.fontWeight || "500" };
line-height: ${ (props) => props.lineHeight || "24px" };
font-family: ${ (props) => props.fontFamily || "Inter" };
display: flex;
justify-content: ${(props)=>props.justifyContent|| "center"};
align-items: ${(props) => props.alignItems || "center" };
onClick: ${(props) =>props.onClick};
`
// const IconRight = styled.img`
// margin-left:${(props)=>props.marginLeft||"8px"},
// `

const BlueButton = ({description,backgroundColor,width,height,border,borderRadius,padding,gap,color,fontSize,fontWeight,lineHeight,fontFamily,justifyContent,alignItems}) => {
    return (
        <StyledBlueButtons 
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            border={border}
            borderRadius={borderRadius}
            padding={padding}
            gap={gap}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
            justifyContent={justifyContent}
            alignItems={alignItems}
            // onClick={onClick}
        >
            {description}   
            
                {/* <IconRight marginLeft={marginLeft} src={iconRight}/> */}
            </StyledBlueButtons>
    )
}
export default BlueButton
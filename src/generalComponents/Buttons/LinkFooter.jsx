import styled from "styled-components";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


const StyledLinkFooter = styled.a`
width: ${(props) => props.width || ""};
height: ${(props) => props.height || "24px"};
gap: ${(props) => props.gap || ""};
font: Inter;
font-weight: ${(props) => props.fontWeight || "400"};
font-size: ${(props) => props.fontSize || "16px"};
line-height: ${(props) => props.lineHeight || "24px"};
color: #9CA3AF;
background: ${(props)=>props.background||""};
display: flex;
flex-direction: ${(props)=>props.flexDirection};
justify-content: ${(props)=>props.justifyContent};
align-items: ${(props)=>props.alignItems};
cursor: pointer;
URL: ${(props) => props.URL};
`

const LinkFooter = ({ width, height, gap, description, fontWeight, fontSize, lineHeight, background, URL,justifyContent, flexDirection, alignItems}) => {
    const linkClick = () => {
        window.location.href = URL;
    }
    return (
        <StyledLinkFooter
        width = { width }
        height = { height }
        gap={gap}
        fontWeight={ fontWeight }  
        fontSize={fontSize}
        lineHeight={lineHeight}
        background={background}
        justifyContent={justifyContent}   
        alignItems={alignItems}   
        flexDirection={flexDirection}    
        href=""
        onClick={linkClick}>
        {description}
        </StyledLinkFooter>    
    )
}
export default LinkFooter
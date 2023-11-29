import styled from "styled-components";
import { ArrowLink } from "../image/indexImage";
import React from "react";

const StyledLinkButton = styled.a`
width: ${(props) => props.width || "105px"};
height: ${(props) => props.height || "20px"};
font: Inter;
font-weight: ${(props) => props.fontWeight || "500"};
font-size: ${(props) => props.fontSize || "16px"};
line-height: ${(props) => props.lineHeight || "24px"};
color: #3F83F8;
display: flex;
flex-direction: ${(props)=>props.flexDirection};
justify-content: ${(props)=>props.justifyContent};
align-items: ${(props)=>props.alignItems};
cursor: pointer;
url: ${(props) => props.url};
`
const VectorInButton = styled.svg`
width: ${(props) => props.width || "20px"};
height: ${(props) => props.height||"20px"};
display: ${(props)=>props.display||"flex"};
justify-content: ${(props)=>props.justifyContent||"space-between"};
align-items: ${(props)=>props.alignItems||"center"};
`

const LinkButton = ({ width, height, description, fontWeight, fontSize, lineHeight, background, url, display,justifyContent, flexDirection, alignItems}) => {
    const linkClick = () => {
        window.location.href = url;
    }
    return (
        <StyledLinkButton
        width = { width }
        height = { height }
        fontWeight={ fontWeight }  
        fontSize={fontSize}
        lineHeight={lineHeight}
        background={background}
        display={display} 
        justifyContent={justifyContent}   
        alignItems={alignItems}   
        flexDirection={flexDirection}    
        href=""
        onClick={linkClick}>
        {description}
        <VectorInButton><image xlinkHref={ArrowLink}/></VectorInButton>
        </StyledLinkButton>    
    )
}
export default LinkButton
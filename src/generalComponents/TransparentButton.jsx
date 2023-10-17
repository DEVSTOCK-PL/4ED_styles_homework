import styled from "styled-components";
import Extlink from "../image/Extlink.svg"

const StyledTransparentButton = styled.button`
width: 122px;
height: 34px;
border-radius: 8px;
${'' /* padding: 8px 12px 8px 12px; */}
background: #1f2a37;
border: 1px solid #4b5563;
font-family: Inter;
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: #9CA3AF;
display: flex;
align-items: flex-start;
justify-content: space-around;
`
const ExtButton = styled.img`
width: 16px;
height: 16px;
display: flex;
align-items: center;
`
const TransparentButton = ({ description }) => {
    return (
        <StyledTransparentButton>
            <ExtButton src={Extlink} />
            {description}
        </StyledTransparentButton>
    )
}

export default TransparentButton
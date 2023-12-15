import styled from "styled-components";
import { Share } from "../../image/indexImage";

const StyledTransparentShareButton = styled.button`
width: 210px;
height: 41px;
border-radius: 8px;
padding: 8px 12px 8px 12px;
gap: 8px;
background: #1F2A37;
border: 1px solid #4B5563;
font-family: Inter;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #9CA3AF;
display: flex;
align-items: center;
`
const ShareInButton = styled.img`
width: 16px;
height: 16px;
`
const TransparentShareButton = ({ description }) => {
    return (
        <StyledTransparentShareButton>
            <ShareInButton src={Share} />
            {description}
        </StyledTransparentShareButton>
    )
}

export default TransparentShareButton
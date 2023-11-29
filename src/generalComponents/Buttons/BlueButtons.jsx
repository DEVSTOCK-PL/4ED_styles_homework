import styled from "styled-components"

const StyledBlueButtons = styled.button`
background-color: #1A56DB;
width: ${(props) => props.width || '117px'};
height: 41px;
border: none;
border-radius: 8px;
padding: 10px 20px 10px 20px;
gap: 8px;
color: #FFF;
font-size: 14px;
font-weight: 500;
line-height: 24px;
display: flex;
justify-content: center;
align-items: center;
onClick: ${(props) =>props.onClick};
`

const BlueButtons = ({ description, width, onClick, }) => {
    return (
        <StyledBlueButtons 
            width={width}
            onClick={onClick}>
            {description}
        </StyledBlueButtons>
    )
}
export default BlueButtons
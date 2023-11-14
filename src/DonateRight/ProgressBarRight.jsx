import React from "react"
import styled from "styled-components"

const ProgressBarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 10px;
background: #374151;
`
const ProgressBarLine = styled.div`
width: 100%;
height: 10px;
background: #1C64F2;
`

const ProgressBarRight = ({ donations2, targetDonations2 }) => {
    const progress2 = (donations2 / targetDonations2) * 100;
    return (
        <ProgressBarContainer>
            <ProgressBarLine style={{width: `${progress2}%`}} />
        </ProgressBarContainer>
    )
}
export default ProgressBarRight
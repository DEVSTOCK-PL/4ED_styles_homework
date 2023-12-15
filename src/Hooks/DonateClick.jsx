import React, { useState } from 'react'

import styled from 'styled-components'

const DonateButton = styled.button`
width: 121px;
height: 41px;
border: none;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
background-color: #1C64F2;
font-size: 14px;
line-height: 21px;
color: #FFF;
font-weight: 500;
padding: 10px 20px 10px 20px;
`

const Counter = styled.div`
font-size: 18px;
font-weight: 700;
line-height: 27px;
color: #FFF;
`
const ButtonClick = styled.button`
width: 121px; 
height: 41px;
background:#1C64F2;
border-radius: 8px;
font-size: 14px;
line-height: 21px;
font-weight: 500;
display: flex;
align-item: center;
justify-content: center;
`

const NewDonateLogic = ({ handleClick }) => {
    const [count, setCount] = useState(0)
    
    const handleButtonClick = () => {
        handleClick();
        setCount(count + 1000);  
    }
    return (
        <>
            <DonateButton>
                <ButtonClick onClick={handleButtonClick}>Donate now</ButtonClick>
            </DonateButton>
            <Counter>{count}</Counter>
        </>
    )
}

export { NewDonateLogic, Counter, ButtonClick}
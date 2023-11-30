import React, { useState } from "react";
import styled from "styled-components";

const SelectorWrapper = styled.div`
display: block;
width: 23.1px;
height: 19.8px;
color: #FFF;`

const OptionSelector = styled.div`
width: 23.1px;
height: 3px;
background: #FFF;
color: #FFF;
margin: 4px 0px 4px 5px;
`
const OpltionList = styled.ul`
list-style: none;
top: 30px;
left: 0px;
display: ${({visible})=>(visible?"block":"none")}
`
const SetOption = styled.li`
cursor: pointer;
`
const Selector = () => {
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    const startSelector = () => {
        setSelectorVisible(!selectorVisible)
    }
    const handleClickOption = (option) => {
        setSelectOption(option);
        setSelectorVisible(false)
    }
    return (
        <SelectorWrapper>
            <OptionSelector onClick={startSelector}></OptionSelector>
            <OptionSelector></OptionSelector>
            <OptionSelector></OptionSelector>
            <OpltionList visible={selectorVisible}>
                <SetOption onClick={() => handleClickOption("Company")}>Company</SetOption>
                <SetOption onClick={() => handleClickOption("Marketplace")}>Marketplace</SetOption>
                <SetOption onClick={() => handleClickOption("Features")}>Features</SetOption>
                <SetOption onClick={() => handleClickOption("Team")}>Team</SetOption>
                <SetOption onClick={() => handleClickOption("Contact")}>Contact</SetOption>
            </OpltionList>
        </SelectorWrapper>
    )
}
export default Selector
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
color: #FFF;
background: red;
display: ${props => {
    console.log(props.display);
    props.display
}};
`
const SetOption = styled.li`
cursor: pointer;
color: white;
`
const Selector = () => {
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    const startSelector = () => {
        setSelectorVisible(!selectorVisible)
        console.log(selectorVisible, "selectorVisible")
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
            <OpltionList display={selectorVisible ? "none" :"block" }>
                <SetOption onClick={() => handleClickOption("home")}>Home</SetOption>
                <SetOption onClick={() => handleClickOption("news")}>News</SetOption>
                <SetOption onClick={() => handleClickOption("events")}>Events</SetOption>
                <SetOption onClick={() => handleClickOption("contact")}>Contact</SetOption>
                <SetOption onClick={() => handleClickOption("rickandmorty")}>Rick&Morty</SetOption>
                <SetOption onClick={()=> handleClickOption("login")}>Log in</SetOption>
                <SetOption onClick={()=>handleClickOption("get-started")}>Get started</SetOption>
            </OpltionList>
        </SelectorWrapper>
    )
}
export default Selector
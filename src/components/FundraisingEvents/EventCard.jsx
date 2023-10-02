import React from 'react';
import styled from "styled-components";
import GoalProgressBar from "./GoalProgressBar.jsx";
import {Button} from "../UI/index.js";


const EventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-width: 552px;
  background-color: #1F2A37;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 32px;
  @media (max-width: 800px) {
    max-width: 100%;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 125%;
    color: #FFF;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #9CA3AF;
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: left;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`
const Image = styled.div`
  background: url(${({img}) => img}) lightgray no-repeat center center / cover;
  height: 288px;
  width: 100%;
  border-radius: 8px;

`

const EventCard = ({data: {title, text, img, goal, donors, buttons}}) => {

  return (
    <EventCardWrapper>
      {/*<img src='/img/6322b3afb350485f9f1c6379df6e9e6b.jpeg'/>*/}
      <Image img={img}/>
      <GoalProgressBar goal={goal} donors={donors}/>
      <h1>{title}</h1>
      <p>{text}</p>
      <ButtonsWrapper>
        {buttons.map(button => (
          <Button variant={button.variant}> {button.icon && <img src='/share.svg'/>}{button.label}</Button>))}

      </ButtonsWrapper>
    </EventCardWrapper>
  );
};

export default EventCard;
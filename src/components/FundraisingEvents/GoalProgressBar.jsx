import React from 'react';
import styled from "styled-components";

const GoalProgressBar = ({goal, donors}) => {
  const GoalProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `
  const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const LeftLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    span:first-of-type {
      color: #FFF;
      font-size: 18px;
      font-weight: 700;
      line-height: 150%;
    }

    span:last-of-type {
      color: #9CA3AF;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  `
  const RightLabel = styled.div`
    color: #9CA3AF;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  `
  const ProgressBar = styled.div`
    background-color: #374151;
    height: 10px;
    position: relative;
    border-radius: 2px;

    &::after {
      content: '';
      position: absolute;
      background-color: #1C64F2;
      border-radius: 2px;
      height: 100%;
      width: ${Math.floor((goal.raised / goal.target) * 100)}%;
      top: 0;
      left: 0;
    }
  `

  const NumberFormatter = number => {
    if (number >= 1000) {
      return (number / 1000) + 'k';
    }
    return number
  }


  return (
    <GoalProgressBarWrapper>
      <LabelContainer>
        <LeftLabel><span>${goal.raised.toLocaleString('en-US')}</span>
          <span>of {NumberFormatter(goal.target)} goal</span></LeftLabel>
        <RightLabel>{donors.toLocaleString()} donors</RightLabel>
      </LabelContainer>
      <ProgressBar></ProgressBar>
    </GoalProgressBarWrapper>
  );
};

export default GoalProgressBar;
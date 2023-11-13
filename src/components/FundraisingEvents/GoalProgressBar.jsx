import styled from "styled-components";

const GoalProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span:first-of-type {
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  }

  span:last-of-type {
    color: ${({ theme }) => theme.text_2};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;
const RightLabel = styled.div`
  color: ${({ theme }) => theme.text_2};
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`;
const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.background_3};
  height: 10px;
  position: relative;
  border-radius: 2px;

  &::after {
    content: "";
    position: absolute;
    background-color: #1c64f2;
    border-radius: 2px;
    height: 100%;
    width: ${({ $raised, $target }) => Math.min(Math.floor(($raised / $target) * 100), 100)}%;
    top: 0;
    left: 0;
  }
`;

const GoalProgressBar = ({ target, raised, donors }) => {
  const NumberFormatter = (number) => {
    if (number >= 1000) {
      return number / 1000 + "k";
    }
    return number;
  };

  return (
    <GoalProgressBarWrapper>
      <LabelContainer>
        <LeftLabel>
          <span>${raised.toLocaleString("en-US")}</span>
          <span>of {NumberFormatter(target)} goal</span>
        </LeftLabel>
        <RightLabel>{donors.toLocaleString()} donors</RightLabel>
      </LabelContainer>
      <ProgressBar $raised={raised} $target={target}></ProgressBar>
    </GoalProgressBarWrapper>
  );
};

export default GoalProgressBar;
